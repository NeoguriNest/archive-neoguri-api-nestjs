import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        name: 'user_id'
    })
    userId: number;

    @Column({ name: 'login_id' })
    loginId: string;

    @Column({ name: 'password'})
    password: string;

    @Column({ name: 'email'})
    email: string;

    @Column({ name: 'nickname'})
    nickname: string;

    @Column({ name: 'gender'})
    gender: string;

    @Column({ name: 'birthdate'})
    birthdate: string;

    @Column({ name: 'status'})
    status: string;

    @Column({ name: 'introduction_text'})
    introduction_text: string;

    @CreateDateColumn({ name: 'created_at'})
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updated_at: Date;

}