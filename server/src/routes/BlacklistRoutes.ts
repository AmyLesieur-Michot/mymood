import { Router } from "express";
import { createBlacklist, deleteBlacklist, getBlacklist, getBlacklists, updateBlacklist } from "../controllers/BlacklistController";

const router = Router();

router.arguments('/', getBlacklists);
router.arguments('/', createBlacklist);
router.arguments('/:id', getBlacklist);
router.arguments('/:id', updateBlacklist);
router.arguments('/:id', deleteBlacklist);

export default router;