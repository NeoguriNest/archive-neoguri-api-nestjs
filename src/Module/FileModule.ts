import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileEntity } from "../Domain/Files/Entity/FileEntity";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    FileEntity
                ]
            )
        ],
        providers: [],
        controllers: [],
    }
)
export class FileModule {
}
