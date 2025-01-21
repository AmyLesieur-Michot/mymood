import { Request, Response } from "express";
import { Group } from "../entities/Group";

// Creation of the function getGroups that get all the groups.
export async function getGroups(req: Request, res: Response) {
    res.send(await Group.find());
}

// Creation of the function createUser that create an user.
export async function createGroup(req: Request, res: Response) {
    if (!('name' in req.body)) return res.status(400).send('Missing "name" field');

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

    if (!group) return res.sendStatus(404);

    res.send(group);
}

// Creation of the function updateGroup that update the details of an group.
export async function updateGroup(req: Request, res: Response) {
    if (!('name' in req.body)) return res.status(400).send('Missing "name" field');

    const group = await Group.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!group) return res.sendStatus(404);

    group.name = req.body.name;
}

// Creation of the function deleteGroup that delete an group.
export async function deleteGroup(req: Request, res: Response) {
    const group = await Group.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!group) return res.sendStatus(404);

    await group.remove();

    res.sendStatus(200);
}