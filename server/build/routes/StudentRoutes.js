"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MoodController_1 = require("../controllers/MoodController");
const AlertController_1 = require("../controllers/AlertController");
const router = (0, express_1.Router)();
router.post('/mood', MoodController_1.createMood);
router.post('/alert', AlertController_1.createAlert);
exports.default = router;
