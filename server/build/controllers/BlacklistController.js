"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlacklists = getBlacklists;
exports.createBlacklist = createBlacklist;
exports.deleteBlacklist = deleteBlacklist;
const Blacklist_1 = require("../entities/Blacklist");
// Creation of the function getBlacklists that get all the blacklists.
async function getBlacklists(req, res) {
    res.send(await Blacklist_1.Blacklist.find());
}
// Creation of the function createBlacklist that create an blacklist.
async function createBlacklist(req, res) {
    if (typeof req.body.student !== 'number' || !Number.isSafeInteger(req.body.student)) {
        res.status(400).send('Missing "student" field');
        return;
    }
    if (typeof req.body.supervisor !== 'number' || !Number.isSafeInteger(req.body.supervisor)) {
        res.status(400).send('Missing "supervisor" field');
        return;
    }
    const { student, supervisor } = req.body;
    const blacklist = new Blacklist_1.Blacklist();
    blacklist.student = student;
    blacklist.supervisor = supervisor;
    await blacklist.save();
    res.sendStatus(201);
}
// Creation of the function deleteBlacklist that delete an blacklist.
async function deleteBlacklist(req, res) {
    const blacklist = await Blacklist_1.Blacklist.findOne({
        where: {
            supervisor: { id: Number(req.params.supervisorId) },
            student: { id: Number(req.params.studentId) },
        },
    });
    if (!blacklist) {
        res.sendStatus(404);
        return;
    }
    await blacklist.remove();
    res.sendStatus(200);
}
