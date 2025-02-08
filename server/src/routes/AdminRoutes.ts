import { Router } from "express";
import { addUserToGroup, createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/UserController";
import { createGroup, deleteGroup, getGroup, getGroups, updateGroup } from "../controllers/GroupController";
import { updateAlert } from "../controllers/AlertController";

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/group/:groupId/add/:userId', addUserToGroup), 


router.get('/groups', getGroups);
router.post('/group', createGroup);
router.get('/group/:id', getGroup);
router.put('/group/:id', updateGroup);
router.delete('/group/:id', deleteGroup);

router.put('/alert/:id', updateAlert);

export default router;