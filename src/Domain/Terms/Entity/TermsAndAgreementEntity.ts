import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'terms_and_agreements' })
export class TermsAndAgreementEntity {
    @PrimaryGeneratedColumn({ name: 'term_id' })
    termId: number;

    @Column({ name: 'type' })
    type: string;

    @Column({ name: 'title' })
    title: number;

    @Column({ name: 'content' })
    content: number;

    @Column({ name: 'status' })
    status: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}