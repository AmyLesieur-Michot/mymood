"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentConnected = studentConnected;
exports.supervisorConnected = supervisorConnected;
exports.adminConnected = adminConnected;
exports.getUserByToken = getUserByToken;
const User_1 = require("../entities/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function studentConnected(req, res, next) {
    const token = req.cookies.token;
    if (!token)
        return res.sendStatus(401);
    const user = await getUserByToken(token);
    if (!user)
        return res.sendStatus(401);
    if (!user.student)
        return res.sendStatus(401);
    next();
}
async function supervisorConnected(req, res, next) {
    const token = req.cookies.token;
    if (!token)
        return res.sendStatus(401);
    const user = await getUserByToken(token);
    if (!user)
        return res.sendStatus(401);
    if (!user.supervisor)
        return res.sendStatus(401);
    next();
}
async function adminConnected(req, res, next) {
    const token = req.cookies.token;
    if (!token)
        return res.sendStatus(401);
    const user = await getUserByToken(token);
    if (!user)
        return res.sendStatus(401);
    if (!user.admin)
        return res.sendStatus(401);
    next();
}
async function getUserByToken(token) {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET environment variable is not defined");
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;
        if (!userId)
            return null;
        const user = await User_1.User.findOne({
            where: { id: userId }
        });
        if (!user)
            return null;
        return user;
    }
    catch (err) {
        return null;
    }
}
