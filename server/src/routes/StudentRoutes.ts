import { Router } from "express";
import { createMood } from "../controllers/MoodController";
import { createAlert } from "../controllers/AlertController";

const router = Router();

router.post('/mood', createMood);
router.post('/alert', createAlert);

export default router;