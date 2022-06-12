import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from "./UserEntity";
import { TermsAndAgreementEntity } from "../../Terms/Entity/TermsAndAgreementEntity";

@Entity({ name: 'user_agreements' })
export class UserAgreementEntity {
    @PrimaryColumn({ name: 'user_id' })
    userId: number;

    @PrimaryColumn({ name: 'term_id' })
    termId: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => UserEntity, { lazy: true, createForeignKeyConstraints: false })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @ManyToOne(() => TermsAndAgreementEntity, { lazy: true, createForeignKeyConstraints: false })
    @JoinColumn({ name: 'term_id' })
    term: TermsAndAgreementEntity;

}