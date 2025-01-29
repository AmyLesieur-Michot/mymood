import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../entities/User';

export async function login (req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email:email
        }
    })
    if (!user) {
        res.sendStatus(403);
        return;
    } 

    if (!(await bcrypt.compare(password, user.password))) {
        res.sendStatus(403);
        return;
    } 

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET environment variable is not defined");
    }

    const token = jwt.sign({
        id: user.id
    }, process.env.JWT_SECRET);

    res.cookie('token', token);
    res.send('authentificated');
}

export function logout(req: Request, res: Response) {
    res.clearCookie('token');
    res.send('Déconnexion réussie');
}