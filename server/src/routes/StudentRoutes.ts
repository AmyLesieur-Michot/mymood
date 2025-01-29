import { Router } from "express";
import { createMood } from "../controllers/MoodController";
import { createAlert } from "../controllers/AlertController";

const router = Router();

router.arguments('/', createMood);
router.arguments('/', createAlert);

export default router;