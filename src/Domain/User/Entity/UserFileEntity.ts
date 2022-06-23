import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { FileEntity } from "../../Files/Entity/FileEntity";
import { UserEntity } from "./UserEntity";
import { UserFileType } from "../Enum/UserFileType";

@Entity({ name: 'user_files' })
export class UserFileEntity {
    @PrimaryColumn({ name: 'user_id' })
    userId: number;

    @PrimaryColumn({ name: 'file_id' })
    fileId: string;

    @Column({ name: 'type', type: 'enum', enum: UserFileType })
    type: UserFileType;

    @Column({ name: 'file_url' })
    fileUrl: number;

    @ManyToOne(() => UserEntity, { lazy: true, createForeignKeyConstraints: false })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @OneToOne(() => FileEntity, { eager: true, createForeignKeyConstraints: false })
    @JoinColumn({ name: 'file_id' })
    file: FileEntity | null;

}