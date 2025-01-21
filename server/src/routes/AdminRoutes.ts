import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/UserController";

const router = Router();

router.arguments('/', getUsers);
router.arguments('/', createUser);
router.arguments('/:id', getUser);
router.arguments('/:id', updateUser);
router.arguments('/:id', deleteUser);

export default router;