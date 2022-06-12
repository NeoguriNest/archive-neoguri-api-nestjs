import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';
import { UserEntity } from "../../../../User/Entity/UserEntity";
import { BoardPostEntity } from "../../Post/Entity/BoardPostEntity";

@Entity({ name: 'board_comments' })
export class BoardCommentEntity {
    @PrimaryColumn({ type: 'varchar', length: 36, name: 'comment_id' })
    commentId: string;

    @Column({ name: 'nest_id' })
    nestId: number;

    @Column({ name: 'board_id' })
    boardId: string;

    @Column({ name: 'post_id' })
    postId: string;

    @Column({ name: 'user_id' })
    userId: string;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'content', type: 'text' })
    content: string;

    @Column({ name: 'status' })
    status: number;

    @Column({ name: 'parent_id' })
    parentId: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id'})
    owner: UserEntity;

    @ManyToOne(() => BoardPostEntity)
    @JoinColumn({ name: 'post_id'})
    post: BoardPostEntity;

    @ManyToOne(() => BoardCommentEntity)
    @JoinColumn({ name: 'parent_id'})
    parent: BoardCommentEntity | null;

    @OneToMany(() => BoardCommentEntity, comment => comment.parent)
    @JoinColumn({ name: 'parent_id' })
    children: BoardCommentEntity[] | null;

}