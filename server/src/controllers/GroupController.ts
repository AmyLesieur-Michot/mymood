import { Request, Response } from "express";
import { Group } from "../entities/Group";

// Creation of the function getGroups that get all the groups.
export async function getGroups(req: Request, res: Response) {
    res.send(await Group.find());
}

// Creation of the function createUser that create an user.
export async function createGroup(req: Request, res: Response) {
    if (typeof req.body.name !== 'string') {
        res.status(400).send('Missing "name" field');
        return;
    } 

    const { name } = req.body;

    const group = new Group();

    group.name = name;

    await group.save();

    res.sendStatus(201);
}

// Creation of the function getGroup that get an group.
export async function getGroup(req: Request, res: Response) {
    const group = await Group.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!group) {
        res.sendStatus(404);
        return;
    } 

    res.send(group);
}

// Creation of the function updateGroup that update the details of an group.
export async function updateGroup(req: Request, res: Response) {
    if (typeof req.body.name !== 'string') {
        res.status(400).send('Missing "name" field');
        return;
    } 

    const group = await Group.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!group) {
        res.sendStatus(404);
        return;
    } 

    group.name = req.body.name;

    await group.save();

    res.sendStatus(200);
}

// Creation of the function deleteGroup that delete an group.
export async function deleteGroup(req: Request, res: Response) {
    const group = await Group.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!group) {
        res.sendStatus(404);
        return;
    } 

    await group.remove();

    res.sendStatus(200);
}



