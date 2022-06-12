import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from "../../../../User/Entity/UserEntity";
import { BoardPostEntity } from "./BoardPostEntity";

@Entity({ name: 'board_post_bookmarks' })
export class BoardPostBookmarkEntity {
    @PrimaryColumn({ type: 'varchar', length: 36, name: 'post_id' })
    postId: string;

    @PrimaryColumn({ name: 'user_id' })
    userId: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => BoardPostEntity, { eager: true, createForeignKeyConstraints: false })
    @JoinColumn({ name: 'post_id' })
    post: BoardPostEntity;

    @ManyToOne(() => UserEntity, { eager: true, createForeignKeyConstraints: false })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;
}
