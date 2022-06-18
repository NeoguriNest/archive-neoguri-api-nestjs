import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TermAndAgreementType } from "../Enum/TermAndAgreementType";
import { TermAndAgreementStatus } from "../Enum/TermAndAgreementStatus";

@Entity({ name: 'terms_and_agreements' })
export class TermsAndAgreementEntity {
    @PrimaryGeneratedColumn({ name: 'term_id' })
    termId: number;

    @Column({ name: 'type', type: 'enum', enum: TermAndAgreementType })
    type: string;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'content', type: 'text' })
    content: string;

    @Column({ name: 'status', type: 'enum', enum: TermAndAgreementStatus, default: TermAndAgreementStatus.VISIBLE })
    status: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}