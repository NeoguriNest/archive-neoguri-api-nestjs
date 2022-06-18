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
import { UserStatus } from "../Enum/UserStatus";
import { Gender } from "../Enum/Gender";

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

    @Column({ name: 'gender', type: 'enum', enum: Gender, default: Gender.NONE })
    gender: string;

    @Column({ name: 'birthdate' })
    birthdate: string;

    @Column({ name: 'status', type: 'enum', enum: UserStatus, default: UserStatus.ACTIVATED })
    status: number;

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