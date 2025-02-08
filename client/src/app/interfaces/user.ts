import { Alert } from "./alert";
import { Blacklist } from "./blacklist";
import { Group } from "./group";
import { Mood } from "./mood";

export interface User {
    id: number;

    first_name: string;
    last_name:string;
    email:string;
    password: string;

    student: boolean;
    supervisor: boolean;
    admin: boolean;

    moods: Mood[];
    alerts: Alert[];
    students: Blacklist[];
    supervisors: Blacklist[];
    groups: Group[];
}

