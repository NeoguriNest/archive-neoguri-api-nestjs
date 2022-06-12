import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardCommentEntity } from "../../../Domain/Nest/Board/Comment/Entity/BoardCommentEntity";
import { BoardCommentReportEntity } from "../../../Domain/Nest/Board/Comment/Entity/BoardCommentReportEntity";
import { BoardEntity } from "../../../Domain/Nest/Board/Entity/BoardEntity";
import { BoardPostEntity } from "../../../Domain/Nest/Board/Post/Entity/BoardPostEntity";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    BoardEntity,
                    BoardPostEntity,
                    BoardCommentEntity,
                    BoardCommentReportEntity
                ]
            )
        ],
        providers: [],
        controllers: [],
    }
)
export class BoardModule {
}
