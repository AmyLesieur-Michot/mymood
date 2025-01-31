import { User } from "./user";

export interface Alert {
    id: number;

    date: Date;
    resolved: Date | null;

    user: User;
}
