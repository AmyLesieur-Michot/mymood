import { Request, Response } from "express";
import { Alert } from "../entities/Alert";

// Creation of the function getAlerts that get all the alerts.
export async function getAlerts(req: Request, res: Response) {
    res.send(await Alert.find());
}

// Creation of the function createAlert that create an alert.
export async function createAlert(req: Request, res: Response) {
    if (typeof req.body.date !== 'number') {
        res.status(400).send('Missing "date" field');
        return;
    }

    const date = new Date(req.body.date);
    if (Number.isNaN(date.getTime())) {
        res.status(400).send('Invalid "date" field');
        return;
    }

    const alert = new Alert();

    alert.date = date;
    alert.resolved = null;

    await alert.save();

    res.sendStatus(201);
}

// Creation of the function getAlert that get an alert.
export async function getAlert(req: Request, res: Response) {
    const alert = await Alert.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!alert) {
        res.sendStatus(404);
        return;
    }

    res.send(alert);
}

// Creation of the function updateAlert that update the details of an alert.
export async function updateAlert(req: Request, res: Response) {
    if (typeof req.body.resolved !== 'number') {
        res.status(400).send('Missing "resolved" field');
        return;
    } 

    const resolved = new Date(req.body.resolved);
    if (Number.isNaN(resolved.getTime())) {
        res.status(400).send('Invalid "resolved" field');
        return;
    }

    const alert = await Alert.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!alert) {
        res.sendStatus(404);
        return;
    } 

    alert.resolved = resolved;

    await alert.save();

    res.sendStatus(200);
}

// Creation of the function deleteAlert that delete an alertt.
export async function deleteAlert(req: Request, res: Response) {
    const alert = await Alert.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!alert) {
        res.sendStatus(404);
        return;
    } 

    await alert.remove();

    res.sendStatus(200);
}