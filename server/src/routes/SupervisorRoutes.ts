import { Router } from "express";
import { updateAlert } from "../controllers/AlertController";

const router = Router();

router.put('/:id', updateAlert);

export default router;