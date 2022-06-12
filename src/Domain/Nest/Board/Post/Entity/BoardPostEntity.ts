import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn, JoinTable, ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';
import { UserEntity } from "../../../../User/Entity/UserEntity";
import { BoardCommentEntity } from "../../Comment/Entity/BoardCommentEntity";
import { BoardPostHashTagEntity } from "./BoardPostHashTagEntity";
import { BoardHashTagEntity } from "../../HashTag/BoardHashTagEntity";

@Entity({ name: 'board_posts' })
export class BoardPostEntity {
    @PrimaryColumn({ type: 'varchar', length: 36, name: 'post_id' })
    postId: number;

    @Column({ name: 'nest_id' })
    nestId: number;

    @Column({ name: 'board_id' })
    boardId: string

    @Column({ name: 'user_id' })
    userId: string;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'content', type: 'text' })
    content: string;

    @Column({ name: 'status' })
    status: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => UserEntity, { eager: true, createForeignKeyConstraints: false })
    @JoinColumn({ name: 'user_id' })
    owner: UserEntity;

    @OneToMany(() => BoardCommentEntity, comment => comment.post, { eager: true, createForeignKeyConstraints: false })
    comments: BoardCommentEntity[];

    @ManyToMany(() => BoardHashTagEntity)
    @JoinTable({
        name: 'board_post_hashtags',
        joinColumn: { name: 'post_id' },
        inverseJoinColumn: { name: 'hash_tag_id' }
    })
    hashTags: BoardHashTagEntity[];

}
