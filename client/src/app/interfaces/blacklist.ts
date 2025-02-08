import { User } from "./user";

export interface Blacklist {
    id: number;

    student: User;
    supervisor: User;
}
