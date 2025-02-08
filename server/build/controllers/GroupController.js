"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroups = getGroups;
exports.createGroup = createGroup;
exports.getGroup = getGroup;
exports.updateGroup = updateGroup;
exports.deleteGroup = deleteGroup;
const Group_1 = require("../entities/Group");
// Creation of the function getGroups that get all the groups.
async function getGroups(req, res) {
    res.send(await Group_1.Group.find());
}
// Creation of the function createUser that create an user.
async function createGroup(req, res) {
    if (typeof req.body.name !== 'string') {
        res.status(400).send('Missing "name" field');
        return;
    }
    const { name } = req.body;
    const group = new Group_1.Group();
    group.name = name;
    await group.save();
    res.sendStatus(201);
}
// Creation of the function getGroup that get an group.
async function getGroup(req, res) {
    const group = await Group_1.Group.findOne({
        where: { id: Number(req.params.id) }
    });
    if (!group) {
        res.sendStatus(404);
        return;
    }
    res.send(group);
}
// Creation of the function updateGroup that update the details of an group.
async function updateGroup(req, res) {
    if (typeof req.body.name !== 'string') {
        res.status(400).send('Missing "name" field');
        return;
    }
    const group = await Group_1.Group.findOne({
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
async function deleteGroup(req, res) {
    const group = await Group_1.Group.findOne({
        where: { id: Number(req.params.id) }
    });
    if (!group) {
        res.sendStatus(404);
        return;
    }
    await group.remove();
    res.sendStatus(200);
}
