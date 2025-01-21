import { Request, Response } from "express";
import { Alert } from "../entities/Alert";

// Creation of the function getAlerts that get all the alerts.
export async function getAlerts(req: Request, res: Response) {
    res.send(await Alert.find());
}

// Creation of the function createAlert that create an alert.
export async function createAlert(req: Request, res: Response) {
    if (!('date' in req.body)) return res.status(400).send('Missing "date" field');
    if (!('resolved' in req.body)) return res.status(400).send('Missing "resolved" field');

    const { date, resolved } = req.body;

    const alert = new Alert();

    alert.date = date;
    alert.resolved = resolved;

    await alert.save();

    res.sendStatus(201);
}

// Creation of the function getAlert that get an alert.
export async function getAlert(req: Request, res: Response) {
    const alert = await Alert.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!alert) return res.sendStatus(404);

    res.send(alert);
}

// Creation of the function updateAlert that update the details of an alert.
export async function updateAlert(req: Request, res: Response) {
    if (!('date' in req.body)) return res.status(400).send('Missing "date" field');
    if (!('resolved' in req.body)) return res.status(400).send('Missing "resolved" field');

    const alert = await Alert.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!alert) return res.sendStatus(404);

    alert.date = req.body.date;
    alert.resolved = req.body.resolved;
}

// Creation of the function deleteAlert that delete an alertt.
export async function deleteAlert(req: Request, res: Response) {
    const alert = await Alert.findOne({
        where: { id: Number(req.params.id) }
    });

    if (!alert) return res.sendStatus(404);

    await alert.remove();

    res.sendStatus(200);
}