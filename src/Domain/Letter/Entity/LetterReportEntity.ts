import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from "../../User/Entity/UserEntity";
import { LetterEntity } from "./LetterEntity";

@Entity({ name: 'board_comment_reports' })
export class LetterReportEntity {
    @PrimaryColumn({ type: 'varchar', length: 36, name: 'report_id' })
    reportId: string;

    @Column({ name: 'letter_id' })
    letterId: string;

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

    @ManyToOne(() => LetterEntity)
    @JoinColumn({ name: 'letter_id' })
    letter: LetterEntity;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    reporter: UserEntity;

}