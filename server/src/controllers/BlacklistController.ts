import { Request, Response } from "express";
import { Blacklist } from "../entities/Blacklist";

// Creation of the function getBlacklists that get all the blacklists.
export async function getBlacklists(req: Request, res: Response) {
    res.send(await Blacklist.find());
}

// Creation of the function createBlacklist that create an blacklist.
export async function createBlacklist(req: Request, res: Response) {
    if (typeof req.body.student !== 'number' || !Number.isSafeInteger(req.body.student)) {
        res.status(400).send('Missing "student" field');
        return;
    } 
    if (typeof req.body.supervisor !== 'number' || !Number.isSafeInteger(req.body.supervisor)) {
        res.status(400).send('Missing "supervisor" field');
        return;
    } 

    const { student, supervisor } = req.body;

    const blacklist = new Blacklist();

    blacklist.student = student;
    blacklist.supervisor = supervisor;

    await blacklist.save();

    res.sendStatus(201);
}

// Creation of the function deleteBlacklist that delete an blacklist.
export async function deleteBlacklist(req: Request, res: Response) {
    const blacklist = await Blacklist.findOne({
        where: {
            supervisor:{ id: Number(req.params.supervisorId)},
            student:{ id: Number(req.params.studentId)},
        },
    });

    if (!blacklist) {
        res.sendStatus(404);
        return;
    } 

    await blacklist.remove();

    res.sendStatus(200);
}