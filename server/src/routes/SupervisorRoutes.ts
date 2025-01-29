import { Router } from "express";
import { updateAlert } from "../controllers/AlertController";

const router = Router();

router.arguments('/:id', updateAlert);

export default router;