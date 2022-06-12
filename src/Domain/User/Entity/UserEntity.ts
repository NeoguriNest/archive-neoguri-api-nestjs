import {
    Collection,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { UserAgreementEntity } from "./UserAgreementEntity";
import { UserFileEntity } from "./UserFileEntity";

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    userId: number;

    @Column({ name: 'login_id' })
    loginId: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'email' })
    email: string;

    @Column({ name: 'nickname' })
    nickname: string;

    @Column({ name: 'gender' })
    gender: string;

    @Column({ name: 'birthdate' })
    birthdate: string;

    @Column({ name: 'status' })
    status: string;

    @Column({ name: 'introduction_text' })
    introductionText: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => UserAgreementEntity, 'user_id', { eager: true, createForeignKeyConstraints: false })
    agreements: UserAgreementEntity[]

    @OneToMany(() => UserFileEntity, 'user_id', { eager: true, createForeignKeyConstraints: false })
    files: UserFileEntity[]
}