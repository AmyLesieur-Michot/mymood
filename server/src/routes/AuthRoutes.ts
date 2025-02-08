import { Router } from 'express';
import { login, logout, getUser, getUsers } from "../controllers/AuthController";

const router = Router();

router.post('/login', login);
router.post('/logout', logout);
// Route pour obtenir la liste des utilisateurs
router.get('/users', getUsers); // <-- Ajoute cette ligne
router.get('/user', getUser)
export default router;