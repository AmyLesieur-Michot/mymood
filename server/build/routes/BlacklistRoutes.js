"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BlacklistController_1 = require("../controllers/BlacklistController");
const router = (0, express_1.Router)();
router.get('/', BlacklistController_1.getBlacklists);
router.post('/', BlacklistController_1.createBlacklist);
router.delete('/:supervisorId/:studentId', BlacklistController_1.deleteBlacklist);
exports.default = router;
