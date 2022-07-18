import { LoginUseCaseInterface } from "../LoginUseCaseInteface";
import { LoginDto } from "../../Dto/LoginDto";
import * as JsonWebToken from 'jsonwebtoken';
import { UserRepository } from "../../../../Persistence/Repository/UserRepository";
import { UserRepositoryInterface } from "../../../../Domain/User/Repository/UserRepositoryInterface";
import { Inject, Injectable } from "@nestjs/common";
import { AuthUserDto } from "../../Dto/AuthUserDto";
import * as jwtConfiguration from "../../../../../config/jwt-configuration";
import { MatchedUserDoesNotExistException } from "../../../../Domain/Auth/Exception/MatchedUserDoesNotExistException";
import { StringGeneratorInterface } from "../../../Util/StringGeneratorInterface";
import { RandomStringGenerator } from "../../../Util/RandomStringGenerator";
import { AuthorizationRepository } from "../../../../Persistence/Repository/AuthorizationRepository";
import {
    AuthorizationRepositoryInterface
} from "../../../../Domain/User/Repository/AuthorizationRepositoryInterface";
import { DtoBuilder } from "../../../Dto/DtoBuilder";
import { AuthorizationAddDto } from "../../Dto/AuthorizationAddDto";

@Injectable()
/**
 * @desc 아이디와 패스워드를 이용해 이용해 JWT 발급하는 유즈케이스
 * @date 2022.06.26 ~ 2022.07.02
 * @author owen
 */
export class LoginUseCase implements LoginUseCaseInterface {
    public static REFRESH_TOKEN_EXPIRES_IN: number = (60 * 60 * 24 * 7 * 1000); // 7days;

    constructor(
        @Inject(UserRepository) private userRepository: UserRepositoryInterface,
        @Inject(AuthorizationRepository) private authorizationRepository: AuthorizationRepositoryInterface,
        @Inject(RandomStringGenerator) private stringGenerator: StringGeneratorInterface
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

        const expiresIn = jwtConfiguration.option.expiresIn;
        const now = new Date();
        const expiredAt = new Date(now.getTime() + expiresIn);

        const token = JsonWebToken.sign(Object.assign({}, authUserDto), jwtConfiguration.secretKey, {
            issuer: jwtConfiguration.option.issuer,
            expiresIn: expiresIn
        });

        const refreshToken = this.stringGenerator.generate({ length: 128 });
        const refreshTokenExpiredAt = new Date(now.getTime() + LoginUseCase.REFRESH_TOKEN_EXPIRES_IN);

        await this.authorizationRepository.create(
            new AuthorizationAddDto(
                user.userId,
                user.loginId,
                token,
                expiredAt,
                refreshToken,
                refreshTokenExpiredAt
            )
        );

        return new LoginDto(
            token,
            expiredAt,
            refreshToken,
            refreshTokenExpiredAt,
            authUserDto
        )
    }
}
