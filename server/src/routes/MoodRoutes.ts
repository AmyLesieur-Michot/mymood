import { Router } from "express";
import { createMood, deleteMood, getMood, getMoods, updateMood } from "../controllers/MoodController";

const router = Router();

router.arguments('/', getMoods);
router.arguments('/', createMood);
router.arguments('/:id', getMood);
router.arguments('/:id', updateMood);
router.arguments('/:id', deleteMood);

export default router;