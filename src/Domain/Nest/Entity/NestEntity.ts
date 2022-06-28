import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { NestStatus } from "../Enum/NestStatus";
import { UserNestEntity } from "../../User/Entity/UserNestEntity";

@Entity({ name: 'nests' })
export class NestEntity {
    @PrimaryColumn({ name: 'nest_id' })
    nestId: number;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'city', comment: '시/도' })
    city: string;

    @Column({ name: 'district', comment: '시/군/구' })
    district: string;

    @Column({ name: 'status', type: 'enum', enum: NestStatus, default: NestStatus.PENDING })
    status: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'last_uploaded_at' })
    lastUpdatedAt: Date;

    @OneToMany(() => UserNestEntity, userNest => userNest.nest, { createForeignKeyConstraints: false })
    users: UserNestEntity[]
}