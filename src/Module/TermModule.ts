import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TermsAndAgreementEntity } from "../Domain/Terms/Entity/TermsAndAgreementEntity";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    TermsAndAgreementEntity
                ]
            )
        ],
        providers: [],
        controllers: [],
    }
)
export class TermModule {
}
