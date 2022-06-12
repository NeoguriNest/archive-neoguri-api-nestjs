import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from "./Module/UserModule";
import { FileModule } from "./Module/FileModule";
import { TermModule } from "./Module/TermModule";
import { NestModule } from "./Module/Nest/NestModule";
import { LetterModule } from "./Module/Letter/LetterModule";

@Module(
    {
        imports: [
            TypeOrmModule.forRoot(
                {
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: '1234',
                    database: 'neoguri_db',
                    entities: [],
                    autoLoadEntities: true,
                    synchronize: true
                }
            ),
            FileModule,
            TermModule,
            UserModule,
            NestModule,
            LetterModule
        ]
    }
)
export class AppModule {
    constructor(private dataSource: DataSource) {
    }
}
