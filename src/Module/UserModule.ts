import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserAgreementEntity } from "../Domain/User/Entity/UserAgreementEntity";
import { UserEntity } from "../Domain/User/Entity/UserEntity";
import { UserFileEntity } from "../Domain/User/Entity/UserFileEntity";
import { UserNestEntity } from "../Domain/User/Entity/UserNestEntity";
import { UserController } from "../Controller/User/UserController";
import { UserAddUseCase } from "../Application/User/UseCase/Impl/UserAddUseCase";
import { UserAddDtoBuilder } from "../Application/User/Dto/Builder/UserAddDtoBuilder";
import { UserRepository } from "../Persistence/Repository/UserRepository";
import { UserDtoBuilder } from "../Application/User/Dto/Builder/UserDtoBuilder";
import { LoginUseCase } from "../Application/Auth/UseCase/Impl/LoginUseCase";
import { AuthController } from "../Controller/Auth/AuthController";
import { AuthorizationEntity } from "../Domain/Auth/Entity/AuthorizationEntity";
import { AuthorizationRepository } from "../Persistence/Repository/AuthorizationRepository";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    UserEntity,
                    UserNestEntity,
                    UserAgreementEntity,
                    UserFileEntity,
                    AuthorizationEntity
                ]
            )
        ],
        providers: [
            // Repository
            UserRepository,
            AuthorizationRepository,
            // { provide: 'UserRepository', useClass: UserRepository },
            // Dto Builder
            UserDtoBuilder,
            UserAddDtoBuilder,
            // { provide: 'UserDtoBuilder', useClass: UserDtoBuilder },
            // { provide: 'UserAddDtoBuilder', useClass: UserAddDtoBuilder },

            // UseCase
            LoginUseCase,
            UserAddUseCase
            // { provide: 'UserAddUseCase', useClass: UserAddUseCase }
        ],
        controllers: [AuthController, UserController],
        exports: [ UserRepository, AuthorizationRepository ]
    }
)
export class UserModule {
}
