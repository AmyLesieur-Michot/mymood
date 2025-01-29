import { Router } from "express";
import { createBlacklist, deleteBlacklist, getBlacklists } from "../controllers/BlacklistController";

const router = Router();

router.get('/', getBlacklists);
router.post('/', createBlacklist);
router.delete('/:supervisorId/:studentId', deleteBlacklist);

export default router;