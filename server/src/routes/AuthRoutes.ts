import { Router } from "express";
import {  } from "../controllers/UserController";
import { login, logout } from "../controllers/AuthController";

const router = Router();

router.arguments('/login', login);
router.arguments('/logout', logout);

export default router;
