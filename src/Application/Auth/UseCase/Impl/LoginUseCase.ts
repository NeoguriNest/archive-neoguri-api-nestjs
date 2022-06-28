import { LoginUseCaseInterface } from "../LoginUseCaseInteface";
import { LoginDto } from "../../Dto/LoginDto";
import * as JsonWebToken from 'jsonwebtoken';
import { UserRepository } from "../../../../Persistence/Repository/UserRepository";
import { UserRepositoryInterface } from "../../../../Domain/User/Repository/UserRepositoryInterface";
import { Inject, Injectable } from "@nestjs/common";
import { AuthUserDto } from "../../Dto/AuthUserDto";
import * as jwtConfiguration from "../../../../../config/jwt-configuration";
import { MatchedUserDoesNotExistException } from "../../../../Domain/Auth/Exception/MatchedUserDoesNotExistException";

@Injectable()
/**
 * 2022.06.26 Parkjg20
 * 아이디와 패스워드를 이용해 이용해 JWT 발급하는 유즈케이스
 */
export class LoginUseCase implements LoginUseCaseInterface {

    constructor(@Inject(UserRepository) private userRepository: UserRepositoryInterface
    ) {
    }

    async execute(loginId: string, password: string): Promise<LoginDto> {

        const user = await this.userRepository.findByLoginId(loginId);
        if (user === undefined) {
            throw new MatchedUserDoesNotExistException();
        }

        const authUserDto = new AuthUserDto(
            user.userId,
            user.loginId,
            []
        );

        const expiresIn = jwtConfiguration.expiresIn;
        const now = new Date();
        const expiredAt = new Date(now.getTime() + expiresIn);

        const token = JsonWebToken.sign(Object.assign({}, authUserDto), jwtConfiguration.secretKey, {
            issuer: jwtConfiguration.option.issuer,
            expiresIn: jwtConfiguration.option.expiresIn
        });

        return new LoginDto(
            token,
            authUserDto,
            expiredAt
        )
    }
}
