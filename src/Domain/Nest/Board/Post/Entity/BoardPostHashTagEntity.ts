import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { BoardPostEntity } from "./BoardPostEntity";
import { BoardHashTagEntity } from "../../HashTag/BoardHashTagEntity";

@Entity({ name: 'board_post_hashtags' })
export class BoardPostHashTagEntity {

    @PrimaryColumn({ name: 'post_id' })
    postId: string;

    @PrimaryColumn({ name: 'hash_tag_id' })
    hashTagId: string;

    @ManyToOne(() => BoardPostEntity)
    @JoinColumn({ name: 'post_id' })
    post: BoardPostEntity;

    @ManyToOne(() => BoardHashTagEntity)
    @JoinColumn({ name: 'hash_tag_id' })
    hashTag: BoardHashTagEntity;

}
