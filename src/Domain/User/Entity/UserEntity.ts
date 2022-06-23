import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserAgreementEntity } from "./UserAgreementEntity";
import { UserFileEntity } from "./UserFileEntity";
import { UserNestEntity } from "./UserNestEntity";
import { UserStatus } from "../Enum/UserStatus";
import { Gender } from "../Enum/Gender";
import { UserAddDto } from "../../../Application/User/Dto/UserAddDto";

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
    gender: Gender;

    @Column({ name: 'birthdate' })
    birthdate: string;

    @Column({ name: 'status', type: 'enum', enum: UserStatus, default: UserStatus.ACTIVATED })
    status: UserStatus;

    @Column({ name: 'introduction_text' })
    introductionText: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    static createEntity(userAddDto: UserAddDto): UserEntity {
        const self = new UserEntity();

        self.loginId = userAddDto.loginId;
        self.password = userAddDto.password;
        self.email = userAddDto.email;
        self.nickname = userAddDto.nickname;
        self.gender = userAddDto.gender;
        self.birthdate = userAddDto.birthdate;
        self.introductionText = userAddDto.introductionText;

        self.status = UserStatus.ACTIVATED;
        self.createdAt = new Date();
        self.updatedAt = new Date();

        return self;
    }

    @OneToMany(() => UserNestEntity, 'user_id', { eager: true, createForeignKeyConstraints: false })
    nests: UserNestEntity[]

    @OneToMany(() => UserAgreementEntity, 'user_id', { eager: true, createForeignKeyConstraints: false })
    agreements: UserAgreementEntity[]

    @OneToMany(() => UserFileEntity, 'user_id', { eager: true, createForeignKeyConstraints: false })
    files: UserFileEntity[]
}