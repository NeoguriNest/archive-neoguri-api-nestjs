import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';
import { BoardCommentEntity } from "./BoardCommentEntity";

@Entity({ name: 'board_comment_reports' })
export class BoardCommentReportEntity {
    @PrimaryColumn({ type: 'varchar', length: 36, name: 'comment_id' })
    reportId: string;

    @Column({ name: 'comment_id' })
    commentId: string;

    @Column({ name: 'type' })
    type: number;

    @Column({ name: 'report_content' })
    reportContent: string;

    @Column({ name: 'status' })
    status: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => BoardCommentEntity)
    @JoinColumn({ name: 'comment_id' })
    comment: BoardCommentEntity;

}