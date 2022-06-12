import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardCommentEntity } from "../../../Domain/Nest/Board/Comment/Entity/BoardCommentEntity";
import { BoardCommentReportEntity } from "../../../Domain/Nest/Board/Comment/Entity/BoardCommentReportEntity";
import { BoardEntity } from "../../../Domain/Nest/Board/Entity/BoardEntity";
import { BoardPostEntity } from "../../../Domain/Nest/Board/Post/Entity/BoardPostEntity";
import { BoardHashTagEntity } from "../../../Domain/Nest/Board/HashTag/BoardHashTagEntity";
import { BoardPostBookmarkEntity } from "../../../Domain/Nest/Board/Post/Entity/BoardPostBookmarkEntity";
import { BoardPostLikeEntity } from "../../../Domain/Nest/Board/Post/Entity/BoardPostLikeEntity";
import { BoardPostReportEntity } from "../../../Domain/Nest/Board/Post/Entity/BoardPostReportEntity";
import { BoardPostHashTagEntity } from "../../../Domain/Nest/Board/Post/Entity/BoardPostHashTagEntity";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    BoardEntity,
                    BoardHashTagEntity,
                    BoardPostEntity,
                    BoardPostHashTagEntity,
                    BoardPostLikeEntity,
                    BoardPostBookmarkEntity,
                    BoardPostReportEntity,
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
