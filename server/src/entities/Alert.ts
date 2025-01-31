import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Alert extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: Date;

    @Column({ nullable: true })
    resolved!: Date | null;

    @ManyToOne(() => User, (user) => user.alerts)
    user!: User;
}