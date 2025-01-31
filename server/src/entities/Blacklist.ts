import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Blacklist extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.students)
    student!: User;

    @ManyToOne(() => User, (user) => user.supervisors)
    supervisor!: User;
}