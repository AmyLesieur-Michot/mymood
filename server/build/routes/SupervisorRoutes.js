"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlertController_1 = require("../controllers/AlertController");
const router = (0, express_1.Router)();
router.put('/:id', AlertController_1.updateAlert);
exports.default = router;
