import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";
import jwt from 'jsonwebtoken';

export async function studentConnected(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token;
    if (!token) return res.sendStatus(401);

    const user = await getUserByToken(token);
    if (!user) return res.sendStatus(401);
    if (!user.student) return res.sendStatus(401);

    next();
}

export async function supervisorConnected(req: Request, res: Response, next: NextFunction) {

    const token = req.cookies.token;
    if (!token) return res.sendStatus(401);

    const user = await getUserByToken(token);
    if (!user) return res.sendStatus(401);
    if (!user.supervisor) return res.sendStatus(401);

    next();
}

export async function adminConnected(req: Request, res: Response, next: NextFunction) {

    const token = req.cookies.token;
    if (!token) return res.sendStatus(401);

    const user = await getUserByToken(token);
    if (!user) return res.sendStatus(401);
    if (!user.admin) return res.sendStatus(401);

    next();
}

export async function getUserByToken(token: string): Promise<User | null> {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET environment variable is not defined");
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as { id: number };

        const userId = decodedToken.id;
        if (!userId) return null;
        const user = await User.findOne({
            where: { id: userId }
        });

        if (!user) return null;
        return user;
    } catch(err) {
        return null;
    }
}