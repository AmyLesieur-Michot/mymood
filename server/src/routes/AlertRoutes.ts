import { Router } from "express";
import { createAlert, deleteAlert, getAlert, getAlerts, updateAlert } from "../controllers/AlertController";

const router = Router();

router.arguments('/', getAlerts);
router.arguments('/', createAlert);
router.arguments('/:id', getAlert);
router.arguments('/:id', updateAlert);
router.arguments('/:id', deleteAlert);

export default router;