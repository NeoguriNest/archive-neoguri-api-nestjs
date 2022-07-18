import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserAgreementEntity } from "../../User/Entity/UserAgreementEntity";
import { UserFileEntity } from "../../User/Entity/UserFileEntity";
import { UserNestEntity } from "../../User/Entity/UserNestEntity";
import { UserStatus } from "../../User/Enum/UserStatus";
import { Gender } from "../../User/Enum/Gender";
import { UserAddDto } from "../../../Application/User/Dto/UserAddDto";
import { AuthorizationAddDto } from "../../../Application/Auth/Dto/AuthorizationAddDto";
import { AuthenticationStatus } from "../../../Application/Auth/Value/AuthenticationStatus";

@Entity({ name: 'authorizations' })
export class AuthorizationEntity {
    @PrimaryGeneratedColumn({ name: 'authentication_id' })
    authenticationId: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'login_id' })
    loginId: string;

    @Column({ name: 'access_token', length: 256 })
    accessToken: string;

    @Column({ name: 'access_token_expired_at', type: 'datetime' })
    accessTokenExpiredAt: Date;

    @Column({ name: 'refresh_token', length: 256 })
    refreshToken: string;

    @Column({ name: 'refresh_token_expired_at', type: 'datetime' })
    refreshTokenExpiredAt: Date;

    @Column({ name: 'status', type: 'enum', enum: AuthenticationStatus })
    status: AuthenticationStatus;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    static createEntity(authenticationAddDto: AuthorizationAddDto): AuthorizationEntity {
        const self = new AuthorizationEntity();

        self.userId = authenticationAddDto.userId;
        self.loginId = authenticationAddDto.loginId;
        self.accessToken = authenticationAddDto.accessToken;
        self.accessTokenExpiredAt = authenticationAddDto.accessTokenExpiredAt;
        self.refreshToken = authenticationAddDto.refreshToken;
        self.refreshTokenExpiredAt = authenticationAddDto.refreshTokenExpiredAt;

        self.status = AuthenticationStatus.AVAILABLE;
        self.createdAt = new Date();
        self.updatedAt = new Date();

        return self;
    }

}