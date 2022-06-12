import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardModule } from "./Board/BoardModule";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
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
