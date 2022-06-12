import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { BoardPostEntity } from "./BoardPostEntity";
import { UserEntity } from "../../../../User/Entity/UserEntity";

@Entity({ name: 'board_post_reports' })
export class BoardPostReportEntity {
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

    @ManyToOne(() => BoardPostEntity)
    @JoinColumn({ name: 'post_id' })
    post: BoardPostEntity;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    reporter: UserEntity;

}
