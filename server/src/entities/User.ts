import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Mood } from "./Mood";
import { Alert } from "./Alert";
import { Blacklist } from "./Blacklist";
import { Group } from "./Group";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    first_name!: string;
    @Column()
    last_name!: string;
    @Column()
    email!: string;
    @Column()
    password!: string;

    @Column()
    student!: boolean;
    @Column()
    supervisor!: boolean;
    @Column()
    admin!: boolean;

    @OneToMany(() => Mood, (mood) => mood.user)
    moods!: Mood[];

    @OneToMany(() => Alert, (alert) => alert.user)
    alerts!: Alert[];

    @OneToMany(() => Blacklist, (blacklist) => blacklist.student)
    students!: Blacklist[];

    @OneToMany(() => Blacklist, (blacklist) => blacklist.supervisor)
    supervisors!: Blacklist[];

    @ManyToMany(() => Group)
    @JoinTable()
    groups!: Group[];
}