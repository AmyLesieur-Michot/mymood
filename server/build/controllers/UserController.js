"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.addUserToGroup = addUserToGroup;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = require("../entities/User");
const Group_1 = require("../entities/Group");
// Creation of the function getUsers that get all the users.
async function getUsers(req, res) {
    res.send(await User_1.User.find());
}
// Creation of the function createUser that create an user.
async function createUser(req, res) {
    if (typeof req.body.first_name !== 'string') {
        res.status(400).send('Missing "first_name" field');
        return;
    }
    if (typeof req.body.last_name !== 'string') {
        res.status(400).send('Missing "last_name" field');
        return;
    }
    if (typeof req.body.email !== 'string') {
        res.status(400).send('Missing "email" field');
        return;
    }
    if (typeof req.body.password !== 'string') {
        res.status(400).send('Missing "password" field');
        return;
    }
    if (typeof req.body.student !== 'boolean') {
        res.status(400).send('Missing "student" field');
        return;
    }
    if (typeof req.body.supervisor !== 'boolean') {
        res.status(400).send('Missing "supervisor" field');
        return;
    }
    if (typeof req.body.admin !== 'boolean') {
        res.status(400).send('Missing "admin" field');
        return;
    }
    const { first_name, last_name, email, password, student, supervisor, admin } = req.body;
    const user = new User_1.User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.password = await bcrypt_1.default.hash(password, 12);
    user.student = student;
    user.supervisor = supervisor;
    user.admin = admin;
    await user.save();
    res.sendStatus(201);
}
// Creation of the function getUser that get an user.
async function getUser(req, res) {
    const user = await User_1.User.findOne({
        where: { id: Number(req.params.id) }
    });
    if (!user) {
        res.sendStatus(404);
        return;
    }
    res.send(user);
}
// Creation of the function updateUser that update the details of an user.
async function updateUser(req, res) {
    if (typeof req.body.first_name !== 'string') {
        res.status(400).send('Missing "first_name" field');
        return;
    }
    if (typeof req.body.last_name !== 'string') {
        res.status(400).send('Missing "last_name" field');
        return;
    }
    if (typeof req.body.email !== 'string') {
        res.status(400).send('Missing "email" field');
        return;
    }
    if (typeof req.body.password !== 'string') {
        res.status(400).send('Missing "password" field');
        return;
    }
    if (typeof req.body.student !== 'boolean') {
        res.status(400).send('Missing "student" field');
        return;
    }
    if (typeof req.body.supervisor !== 'boolean') {
        res.status(400).send('Missing "supervisor" field');
        return;
    }
    if (typeof req.body.admin !== 'boolean') {
        res.status(400).send('Missing "admin" field');
        return;
    }
    const user = await User_1.User.findOne({
        where: { id: Number(req.params.id) }
    });
    if (!user) {
        res.sendStatus(404);
        return;
    }
    if (req.body.first_name !== undefined) {
        user.first_name = req.body.first_name;
    }
    if (req.body.last_name !== undefined) {
        user.last_name = req.body.last_name;
    }
    if (req.body.email !== undefined) {
        user.email = req.body.email;
    }
    if (req.body.password !== undefined) {
        user.password = await bcrypt_1.default.hash(req.body.password, 12);
    }
    if (req.body.student !== undefined) {
        user.student = req.body.student;
    }
    if (req.body.supervisor !== undefined) {
        user.supervisor = req.body.supervisor;
    }
    if (req.body.admin !== undefined) {
        user.admin = req.body.admin;
    }
    await user.save();
    res.sendStatus(200);
}
// Creation of the function deleteUser that delete an user.
async function deleteUser(req, res) {
    const user = await User_1.User.findOne({
        where: { id: Number(req.params.id) }
    });
    if (!user) {
        res.sendStatus(404);
        return;
    }
    await user.remove();
    res.sendStatus(200);
}
// Creation of the function addGroupToUser who add a group to an user.
async function addUserToGroup(req, res) {
    const { userId, groupId } = req.body;
    if (!userId || isNaN(Number(userId))) {
        res.status(400).send('Missing "userId" field');
        return;
    }
    if (!groupId || isNaN(Number(groupId))) {
        res.status(400).send('Missing "groupId" field');
        return;
    }
    const user = await User_1.User.findOne({
        where: { id: Number(userId) },
        relations: ["groups"],
    });
    if (!user) {
        res.status(404).send("User not found");
        return;
    }
    const group = await Group_1.Group.findOne({
        where: { id: Number(groupId) },
    });
    if (!group) {
        res.status(404).send("Group not found");
        return;
    }
    if (!user.groups) {
        user.groups = [];
    }
    if (user.groups.find((g) => g.id === group.id)) {
        res.status(400).send("Group already associated with user");
        return;
    }
    user.groups.push(group);
    await user.save();
    res.status(200).send("Group added to user");
}
