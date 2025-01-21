import { Router } from "express";
import { getUser } from "../controllers/UserController";

const router = Router();

router.arguments('/:id', getUser);

export default router;