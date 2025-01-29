import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../entities/User";
import { Group } from "../entities/Group";

// Creation of the function getUsers that get all the users.
export async function getUsers(req: Request, res: Response) {
    res.send(await User.find());
}

// Creation of the function createUser that create an user.
export async function createUser(req: Request, res: Response) {
    if (typeof req.body.first_name !== 'string') {
        res.status(400).send('Missing "first_name" field');
        return;
    } 
    if (typeof req.body.last_name !== 'string') {
        res.status(400).send('Missing "last_name" field');
        return;
    } 
    if (typeof req.body.email !== 'string') {
        res.status(400).send('Missing "email" field');
        return;
    } 
    if (typeof req.body.password !== 'string') {
        res.status(400).send('Missing "password" field');
        return;
    } 
    if (typeof req.body.student !== 'boolean') {
        res.status(400).send('Missing "student" field');
        return;
    } 
    if (typeof req.body.supervisor !== 'boolean') {
        res.status(400).send('Missing "supervisor" field');
        return;
    } 
    if (typeof req.body.admin !== 'boolean') {
        res.status(400).send('Missing "admin" field');
        return;
    } 

    const { first_name, last_name, email, password, student, supervisor, admin } = req.body;

    const user = new User();

    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.password = await bcrypt.hash(password, 12);
    user.student = student;
    user.supervisor = supervisor;
    user.admin = admin;

    await user.save();

    res.sendStatus(201);
}

// Creation of the function getUser that get an user.
export async function getUser(req: Request, res: Response) {
    const user = await User.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!user) {
        res.sendStatus(404);
        return;
    } 

    res.send(user);
}

// Creation of the function updateUser that update the details of an user.
export async function updateUser(req: Request, res: Response) {
    if (typeof req.body.first_name !== 'string') {
        res.status(400).send('Missing "first_name" field');
        return;
    } 
    if (typeof req.body.last_name !== 'string') {
        res.status(400).send('Missing "last_name" field');
        return;
    } 
    if (typeof req.body.email !== 'string') {
        res.status(400).send('Missing "email" field');
        return;
    } 
    if (typeof req.body.password !== 'string') {
        res.status(400).send('Missing "password" field');
        return;
    } 
    if (typeof req.body.student !== 'boolean') {
        res.status(400).send('Missing "student" field');
        return;
    } 
    if (typeof req.body.supervisor !== 'boolean') {
        res.status(400).send('Missing "supervisor" field');
        return;
    } 
    if (typeof req.body.admin !== 'boolean') {
        res.status(400).send('Missing "admin" field');
        return;
    } 

    const user = await User.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!user) {
        res.sendStatus(404);
        return;
    } 

    if (req.body.first_name !== undefined) {
        user.first_name = req.body.first_name;
    }
    if (req.body.last_name !== undefined) {
        user.last_name = req.body.last_name;
    }
    if (req.body.email !== undefined) {
        user.email = req.body.email;
    }
    if (req.body.password !== undefined) {
        user.password = await bcrypt.hash(req.body.password, 12);
    }
    if (req.body.student !== undefined) {
        user.student = req.body.student;
    }
    if (req.body.supervisor !== undefined) {
        user.supervisor = req.body.supervisor;
    }
    if (req.body.admin !== undefined) {
        user.admin = req.body.admin;
    }

    await user.save();

    res.sendStatus(200);
}

// Creation of the function deleteUser that delete an user.
export async function deleteUser(req: Request, res: Response) {
    const user = await User.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!user) {
        res.sendStatus(404);
        return;
    } 

    await user.remove();

    res.sendStatus(200);
}

// Creation of the function addGroupToUser who add a group to an user.
export async function addUserToGroup(req: Request, res: Response) {
    const { userId, groupId } = req.body;

    if (!userId || isNaN(Number(userId))) {
        res.status(400).send('Missing "userId" field');
        return;
    }
    if (!groupId || isNaN(Number(groupId))) {
        res.status(400).send('Missing "groupId" field');
        return;
    }

    const user = await User.findOne({
        where: { id: Number(userId) },
        relations: ["groups"], 
    });

    if (!user) {
        res.status(404).send("User not found");
        return;
    }

    const group = await Group.findOne({
        where: { id: Number(groupId) },
    });

    if (!group) {
        res.status(404).send("Group not found");
        return;
    }

    if (!user.groups) {
        user.groups = [];
    }

    if(user.groups.find((g) => g.id === group.id)) {
        res.status(400).send("Group already associated with user");
        return;
    }

    user.groups.push(group);
    await user.save();
    res.status(200).send("Group added to user");
}



