import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../entities/User";

// Creation of the function getUsers that get all the users.
export async function getUsers(req: Request, res: Response) {
    res.send(await User.find());
}

// Creation of the function createUser that create an user.
export async function createUser(req: Request, res: Response) {
    if (!('first_name' in req.body)) return res.status(400).send('Missing "first_name" field');
    if (!('last_name' in req.body)) return res.status(400).send('Missing "last_name" field');
    if (!('email' in req.body)) return res.status(400).send('Missing "email" field');
    if (!('password' in req.body)) return res.status(400).send('Missing "password" field');
    if (!('has_alert' in req.body)) return res.status(400).send('Missing "has_alert" field');
    if (!('student' in req.body)) return res.status(400).send('Missing "student" field');
    if (!('supervisor' in req.body)) return res.status(400).send('Missing "supervisor" field');
    if (!('admin' in req.body)) return res.status(400).send('Missing "admin" field');

    const { first_name, last_name, email, password, has_alert, student, supervisor, admin } = req.body;

    const user = new User();
    const saltRounds = 12;

    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.password = await bcrypt.hash(password, saltRounds);
    user.has_alert = has_alert;
    user.student = student;
    user.supervisor = supervisor;
    user.admin = admin;

    await user.save();

    res.sendStatus(201);
}

// Creation of the function getUser that get an user.
export async function getUser(req: Request, res: Response) {
    const user = await User.findOne({
        where: { id: parseInt(req.params.id) }
    });

    if (!user) return res.sendStatus(404);

    res.send(user);
}

// Creation of the function updateUser that update the details of an user.
export async function updateUser(req: Request, res: Response) {
    if (!('first_name' in req.body)) return res.status(400).send('Missing "first_name" field');
    if (!('last_name' in req.body)) return res.status(400).send('Missing "last_name" field');
    if (!('email' in req.body)) return res.status(400).send('Missing "email" field');
    if (!('password' in req.body)) return res.status(400).send('Missing "password" field');
    if (!('has_alert' in req.body)) return res.status(400).send('Missing "has_alert" field');
    if (!('student' in req.body)) return res.status(400).send('Missing "student" field');
    if (!('supervisor' in req.body)) return res.status(400).send('Missing "supervisor" field');
    if (!('admin' in req.body)) return res.status(400).send('Missing "admin" field');

    const user = await User.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!user) return res.sendStatus(404);

    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.has_alert = req.body.has_alert;
    user.student = req.body.student;
    user.supervisor = req.body.supervisor;
    user.admin = req.body.admin;
}

// Creation of the function deleteUser that delete an user.
export async function deleteUser(req: Request, res: Response) {
    const user = await User.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!user) return res.sendStatus(404);

    await user.remove();

    res.sendStatus(200);
}