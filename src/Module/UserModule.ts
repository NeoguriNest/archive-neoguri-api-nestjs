import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserAgreementEntity } from "../Domain/User/Entity/UserAgreementEntity";
import { UserEntity } from "../Domain/User/Entity/UserEntity";
import { UserFileEntity } from "../Domain/User/Entity/UserFileEntity";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    UserEntity,
                    UserAgreementEntity,
                    UserFileEntity
                ]
            )
        ],
        providers: [],
        controllers: [],
    }
)
export class UserModule {
}
