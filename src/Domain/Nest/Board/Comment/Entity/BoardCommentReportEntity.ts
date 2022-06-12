import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { BoardCommentEntity } from "./BoardCommentEntity";
import { BoardPostEntity } from "../../Post/Entity/BoardPostEntity";
import { UserEntity } from "../../../../User/Entity/UserEntity";

@Entity({ name: 'board_comment_reports' })
export class BoardCommentReportEntity {
    @PrimaryColumn({ type: 'varchar', length: 36, name: 'report_id' })
    reportId: string;

    @Column({ name: 'comment_id' })
    commentId: string;

    @Column({ name: 'user_id' })
    userId: string;

    @Column({ name: 'type' })
    type: number;

    @Column({ name: 'content', type: 'text' })
    content: string;

    @Column({ name: 'reported_content', type: 'text' })
    reportedContent: string;

    @Column({ name: 'status' })
    status: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => BoardCommentEntity)
    @JoinColumn({ name: 'comment_id' })
    comment: BoardCommentEntity;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    reporter: UserEntity;

}