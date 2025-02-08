"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const router = (0, express_1.Router)();
router.post('/login', AuthController_1.login);
router.post('/logout', AuthController_1.logout);
// Route pour obtenir la liste des utilisateurs
router.get('/users', AuthController_1.getUsers); // <-- Ajoute cette ligne
router.get('/user', AuthController_1.getUser);
exports.default = router;
