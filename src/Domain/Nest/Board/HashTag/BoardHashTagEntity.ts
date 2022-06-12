import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { BoardPostEntity } from "../Post/Entity/BoardPostEntity";

@Entity({ name: 'board_hashtags' })
export class BoardHashTagEntity {

    @PrimaryColumn({ type: 'varchar', length: 36, name: 'hash_tag_id' })
    hashTagId: string;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'total_post_count' })
    totalPostCount: number;

    @Column({ name: 'last_uploaded_at' })
    lastUploadedAt: Date;

    @ManyToMany(() => BoardPostEntity)
    @JoinTable({
        name: 'board_post_hashtags',
        joinColumn: { name: 'hash_tag_id' },
        inverseJoinColumn: { name: 'post_id' }
    })
    posts: BoardPostEntity[];

}
