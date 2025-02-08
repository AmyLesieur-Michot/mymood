"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
// Define global middlewares here:
app.get('/', (req, res) => {
    res.send('Hello world');
});
// Add Middlewares
app.use((0, cors_1.default)({
    origin: "http://localhost:4200", // Remplace par l'URL de ton frontend
    credentials: true, // Autorise l'envoi des cookies et headers d'authentification
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Register all routers
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
app.use('/auth', AuthRoutes_1.default);
const GroupRoutes_1 = __importDefault(require("./routes/GroupRoutes"));
app.use('/group', GroupRoutes_1.default);
const MoodRoutes_1 = __importDefault(require("./routes/MoodRoutes"));
app.use('/mood', MoodRoutes_1.default);
const BlacklistRoutes_1 = __importDefault(require("./routes/BlacklistRoutes"));
app.use('/blacklist', BlacklistRoutes_1.default);
const AlertRoutes_1 = __importDefault(require("./routes/AlertRoutes"));
app.use('/alert', AlertRoutes_1.default);
const AdminRoutes_1 = __importDefault(require("./routes/AdminRoutes"));
app.use('/admin', AdminRoutes_1.default);
const SupervisorRoutes_1 = __importDefault(require("./routes/SupervisorRoutes"));
app.use('/supervisor', SupervisorRoutes_1.default);
const StudentRoutes_1 = __importDefault(require("./routes/StudentRoutes"));
app.use('/student', StudentRoutes_1.default);
exports.default = app;
