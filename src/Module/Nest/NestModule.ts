import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardModule } from "./Board/BoardModule";
import { NestEntity } from "../../Domain/Nest/Entity/NestEntity";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    NestEntity,
                    BoardModule
                ]
            )
        ],
        providers: [],
        controllers: [],
    }
)
export class NestModule {
}
