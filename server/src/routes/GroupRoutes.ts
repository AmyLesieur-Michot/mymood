import { Router } from "express";
import { getGroups, createGroup, getGroup, updateGroup, deleteGroup } from "../controllers/GroupController";

const router = Router();

router.get('/', getGroups);
router.post('/', createGroup);
router.get('/:id', getGroup);
router.put('/:id', updateGroup);
router.delete('/:id', deleteGroup);

export default router;