import { Router } from "express";
import { getGroups, createGroup, getGroup, updateGroup, deleteGroup } from "../controllers/GroupController";

const router = Router();

router.arguments('/', getGroups);
router.arguments('/', createGroup);
router.arguments('/:id', getGroup);
router.arguments('/:id', updateGroup);
router.arguments('/:id', deleteGroup);

export default router;