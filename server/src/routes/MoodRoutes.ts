import { Router } from "express";
import { createMood, deleteMood, getMood, getMoods, updateMood } from "../controllers/MoodController";

const router = Router();

router.get('/', getMoods);
router.post('/', createMood);
router.get('/:id', getMood);
router.put('/:id', updateMood);
router.delete('/:id', deleteMood);

export default router;