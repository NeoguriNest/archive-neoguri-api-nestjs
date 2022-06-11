import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from "./Module/UsersModule";

@Module({
    imports: [ TypeOrmModule.forRoot(
        {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1234',
            database: 'neoguri_db',
            entities: [],
            synchronize: false
        }
    ), UsersModule ]
})
export class AppModule {
    constructor(private dataSource: DataSource) {
    }
}
