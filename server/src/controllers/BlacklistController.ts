import { Request, Response } from "express";
import { Blacklist } from "../entities/Blacklist";

// Creation of the function getBlacklists that get all the blacklists.
export async function getBlacklists(req: Request, res: Response) {
    res.send(await Blacklist.find());
}

// Creation of the function createBlacklist that create an blacklist.
export async function createBlacklist(req: Request, res: Response) {
    if (!('student' in req.body)) return res.status(400).send('Missing "student" field');
    if (!('supervisor' in req.body)) return res.status(400).send('Missing "supervisor" field');

    const { student, supervisor } = req.body;

    const blacklist = new Blacklist();

    blacklist.student = student;
    blacklist.supervisor = supervisor;

    await blacklist.save();

    res.sendStatus(201);
}

// Creation of the function getBlacklist that get an blacklist.
export async function getBlacklist(req: Request, res: Response) {
    const blacklist = await Blacklist.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!blacklist) return res.sendStatus(404);

    res.send(blacklist);
}

// Creation of the function updateBlacklist that update the details of an blacklist.
export async function updateBlacklist(req: Request, res: Response) {
    if (!('student' in req.body)) return res.status(400).send('Missing "student" field');
    if (!('supervisor' in req.body)) return res.status(400).send('Missing "supervisor" field');

    const blacklist = await Blacklist.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!blacklist) return res.sendStatus(404);

    blacklist.student = req.body.student;
    blacklist.supervisor = req.body.supervisor;
}

// Creation of the function deleteBlacklist that delete an blacklist.
export async function deleteBlacklist(req: Request, res: Response) {
    const blacklist = await Blacklist.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!blacklist) return res.sendStatus(404);

    await blacklist.remove();

    res.sendStatus(200);
}