import { Router } from "express";
import { createAlert, deleteAlert, getAlert, getAlerts, updateAlert } from "../controllers/AlertController";

const router = Router();

router.get('/', getAlerts);
router.post('/', createAlert);
router.get('/:id', getAlert);
router.put('/:id', updateAlert);
router.delete('/:id', deleteAlert);

export default router;