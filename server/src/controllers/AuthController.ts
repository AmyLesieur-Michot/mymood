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
    if (!user) return res.sendStatus(403);
    if (!(await bcrypt.compare(password, user.password))) return res.sendStatus(403);

    const token = jwt.sign({
        id: user.id
    }, 'poule');

    res.cookie('token', token);
    res.send('authentificated');
}

export async function logout(req: Request, res: Response) {
    res.clearCookie('token');
    res.send('Déconnexion réussie');
}