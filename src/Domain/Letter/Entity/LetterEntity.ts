import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from "../../User/Entity/UserEntity";


@Entity({ name: 'letters' })
export class LetterEntity {
    @PrimaryColumn({ type: 'varchar', length: 36, name: 'letter_id' })
    letterId: string;

    @Column({ name: 'sender_id' })
    senderId: number;

    @Column({ name: 'receiver_id' })
    receiverId: string;

    @Column({ name: 'content' })
    content: string;

    @Column({ name: 'status', type: 'text' })
    status: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'receiver_read_at' })
    receiverReadAt: Date | null;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'sender_id' })
    sender: UserEntity;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'receiver_id' })
    receiver: UserEntity;

}