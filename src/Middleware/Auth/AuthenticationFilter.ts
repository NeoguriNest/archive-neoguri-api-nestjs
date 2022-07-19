import { Inject, Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { DtoBuilder } from "../../Application/Dto/DtoBuilder";
import { AuthenticationTokenDto } from "../../Application/Auth/Dto/AuthenticationTokenDto";
import { DtoBuilderInterface } from "../../Application/Dto/DtoBuilderInterface";
import { AuthorizationRepository } from "../../Persistence/Repository/AuthorizationRepository";
import { AuthorizationEntity } from "../../Domain/Auth/Entity/AuthorizationEntity";
import { AccessTokenExpiredException } from "../../Domain/Auth/Exception/AccessTokenExpiredException";

@Injectable()
export class AuthenticationFilter implements NestMiddleware<Request, Response> {

    constructor(
        @Inject(AuthorizationRepository) protected authenticationRepository: AuthorizationRepository
    ) {
    }

    use(req: Request, res: Response, next: NextFunction) {
        const date: Date = new Date();
        const callback = (input): AuthenticationTokenDto => {
            return new AuthenticationTokenDto(
                input.accessToken,
                input.refreshToken
            );
        }
        const dtoBuilder: DtoBuilderInterface<any, AuthenticationTokenDto>
            = new DtoBuilder<any, AuthenticationTokenDto>(callback);

        const token: AuthenticationTokenDto = dtoBuilder.build(req.body);
        this.authenticationRepository.findByAccessToken(token.accessToken)
            .then((result: AuthorizationEntity | undefined) => {
                if (result.accessTokenExpiredAt.getTime() < date.getTime()) {
                    throw new AccessTokenExpiredException();
                }

                next();
            }).catch((error) => {
                Logger.debug(error);
                throw error;
            });
    }

}