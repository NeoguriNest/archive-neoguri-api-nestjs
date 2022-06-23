import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from "./UserEntity";
import { NestEntity } from "../../Nest/Entity/NestEntity";
import { UserNestStatus } from "../Enum/UserNestStattus";

@Entity({ name: 'user_nests' })
export class UserNestEntity {

    @PrimaryColumn({ name: 'user_id' })
    userId: number;

    @PrimaryColumn({ name: 'nest_id' })
    nestId: number;

    @Column({ name: 'village' })
    village: string;

    @Column({ name: 'status', type: 'enum', enum: UserNestStatus, default: UserNestStatus.JOINED })
    status: UserNestStatus;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity

    @ManyToOne(() => NestEntity)
    @JoinColumn({ name: 'nest_id' })
    nest: NestEntity
}