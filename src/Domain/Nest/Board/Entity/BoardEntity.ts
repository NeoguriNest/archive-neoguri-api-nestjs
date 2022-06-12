import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'boards' })
export class BoardEntity {
    @PrimaryColumn({ type: 'varchar', length: 36, name: 'board_id' })
    boardId: number;

    @Column({ name: 'nest_id' })
    nestId: number;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'status' })
    status: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'last_uploaded_at' })
    lastUpdatedAt: Date;
}