import { Request, Response } from "express";
import { Mood } from "../entities/Mood";

// Creation of the function getMoods that get all the moods.
export async function getMoods(req: Request, res: Response) {
    res.send(await Mood.find());
}

// Creation of the function createMood that create an mood.
export async function createMood(req: Request, res: Response) {
    if (typeof req.body.score !== 'number' || !Number.isSafeInteger(req.body.score)) {
        res.status(400).send('Missing "score" field');
        return;
    } 

    const { score } = req.body;

    const mood = new Mood();

    mood.score = score;

    await mood.save();

    res.sendStatus(201);
}

// Creation of the function getMood that get an mood.
export async function getMood(req: Request, res: Response) {
    const mood = await Mood.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!mood) {
        res.sendStatus(404);
        return;
    } 

    res.send(mood);
}

// Creation of the function updateMood that update the details of an mood.
export async function updateMood(req: Request, res: Response) {
    if (typeof req.body.score !== 'number' || !Number.isSafeInteger(req.body.score)) {
        res.status(400).send('Missing "score" field');
        return;
    } 

    const mood = await Mood.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!mood) {
        res.sendStatus(404);
        return;
    } 

    mood.score = req.body.score;

    await mood.save();

    res.sendStatus(200);
}

// Creation of the function deleteMood that delete an mood.
export async function deleteMood(req: Request, res: Response) {
    const mood = await Mood.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!mood) {
        res.sendStatus(404);
        return;
    } 

    await mood.remove();

    res.sendStatus(200);
}