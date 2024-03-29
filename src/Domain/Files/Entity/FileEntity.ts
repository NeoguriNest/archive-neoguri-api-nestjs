import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { FileStatus } from "../Enum/FileStatus";

@Entity({ name: 'files' })
export class FileEntity {
    @PrimaryColumn({ type: 'varchar', length: 36, name: 'file_id' })
    fileId: string;

    @Column({ name: 'file_extension' })
    fileExtension: string;

    @Column({ name: 'file_name' })
    fileName: number;

    @Column({ name: 'file_original_name' })
    fileOriginalName: number;

    @Column({ name: 'file_url' })
    fileUrl: number;

    @Column({ name: 'status', type: 'enum', enum: FileStatus, default: FileStatus.VISIBLE })
    status: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}