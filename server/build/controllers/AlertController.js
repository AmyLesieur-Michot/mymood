"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlerts = getAlerts;
exports.createAlert = createAlert;
exports.getAlert = getAlert;
exports.updateAlert = updateAlert;
exports.deleteAlert = deleteAlert;
const Alert_1 = require("../entities/Alert");
// Creation of the function getAlerts that get all the alerts.
async function getAlerts(req, res) {
    res.send(await Alert_1.Alert.find());
}
// Creation of the function createAlert that create an alert.
async function createAlert(req, res) {
    if (typeof req.body.date !== 'number') {
        res.status(400).send('Missing "date" field');
        return;
    }
    const date = new Date(req.body.date);
    if (Number.isNaN(date.getTime())) {
        res.status(400).send('Invalid "date" field');
        return;
    }
    const alert = new Alert_1.Alert();
    alert.date = date;
    alert.resolved = null;
    await alert.save();
    res.sendStatus(201);
}
// Creation of the function getAlert that get an alert.
async function getAlert(req, res) {
    const alert = await Alert_1.Alert.findOne({
        where: { id: Number(req.params.id) }
    });
    if (!alert) {
        res.sendStatus(404);
        return;
    }
    res.send(alert);
}
// Creation of the function updateAlert that update the details of an alert.
async function updateAlert(req, res) {
    if (typeof req.body.resolved !== 'number') {
        res.status(400).send('Missing "resolved" field');
        return;
    }
    const resolved = new Date(req.body.resolved);
    if (Number.isNaN(resolved.getTime())) {
        res.status(400).send('Invalid "resolved" field');
        return;
    }
    const alert = await Alert_1.Alert.findOne({
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
async function deleteAlert(req, res) {
    const alert = await Alert_1.Alert.findOne({
        where: { id: Number(req.params.id) }
    });
    if (!alert) {
        res.sendStatus(404);
        return;
    }
    await alert.remove();
    res.sendStatus(200);
}
