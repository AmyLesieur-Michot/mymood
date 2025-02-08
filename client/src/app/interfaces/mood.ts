import { User } from "./user";

export interface Mood {
    id: number;

    score: number;

    user: User;
}
