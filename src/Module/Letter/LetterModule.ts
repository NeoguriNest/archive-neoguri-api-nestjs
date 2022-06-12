import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { LetterEntity } from "../../Domain/Letter/Entity/LetterEntity";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    LetterEntity
                ]
            )
        ],
        providers: [],
        controllers: [],
    }
)
export class LetterModule {
}
