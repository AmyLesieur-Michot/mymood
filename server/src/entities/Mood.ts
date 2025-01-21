import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Mood extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @ManyToOne(() => User, (user) => user.moods)
    user: User;
}