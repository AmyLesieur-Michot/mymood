"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoods = getMoods;
exports.createMood = createMood;
exports.getMood = getMood;
exports.updateMood = updateMood;
exports.deleteMood = deleteMood;
const Mood_1 = require("../entities/Mood");
// Creation of the function getMoods that get all the moods.
async function getMoods(req, res) {
    res.send(await Mood_1.Mood.find());
}
// Creation of the function createMood that create an mood.
async function createMood(req, res) {
    if (typeof req.body.score !== 'number' || !Number.isSafeInteger(req.body.score)) {
        res.status(400).send('Missing "score" field');
        return;
    }
    const { score } = req.body;
    const mood = new Mood_1.Mood();
    mood.score = score;
    await mood.save();
    res.sendStatus(201);
}
// Creation of the function getMood that get an mood.
async function getMood(req, res) {
    const mood = await Mood_1.Mood.findOne({
        where: { id: Number(req.params.id) }
    });
    if (!mood) {
        res.sendStatus(404);
        return;
    }
    res.send(mood);
}
// Creation of the function updateMood that update the details of an mood.
async function updateMood(req, res) {
    if (typeof req.body.score !== 'number' || !Number.isSafeInteger(req.body.score)) {
        res.status(400).send('Missing "score" field');
        return;
    }
    const mood = await Mood_1.Mood.findOne({
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
async function deleteMood(req, res) {
    const mood = await Mood_1.Mood.findOne({
        where: { id: Number(req.params.id) }
    });
    if (!mood) {
        res.sendStatus(404);
        return;
    }
    await mood.remove();
    res.sendStatus(200);
}
