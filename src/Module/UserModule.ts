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

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    UserEntity,
                    UserNestEntity,
                    UserAgreementEntity,
                    UserFileEntity
                ]
            )
        ],
        providers: [
            // Repository
            UserRepository,
            // { provide: 'UserRepository', useClass: UserRepository },
            // Dto Builder
            UserDtoBuilder,
            UserAddDtoBuilder,
            // { provide: 'UserDtoBuilder', useClass: UserDtoBuilder },
            // { provide: 'UserAddDtoBuilder', useClass: UserAddDtoBuilder },

            // UseCase
            UserAddUseCase,
            // { provide: 'UserAddUseCase', useClass: UserAddUseCase }
        ],
        controllers: [UserController],
    }
)
export class UserModule {
}
