import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

// Define global middlewares here:

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Add Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Register all routers
import AuthRoutes from './routes/AuthRoutes';
app.use('/auth', AuthRoutes);

import GroupRoutes from './routes/GroupRoutes';
app.use('/group', GroupRoutes);

import MoodRoutes from './routes/MoodRoutes';
app.use('/mood', MoodRoutes);

import BlacklistRoutes from './routes/BlacklistRoutes';
app.use('/blacklist', BlacklistRoutes);

import AlertRoutes from './routes/AlertRoutes';
app.use('/alert', AlertRoutes);

import AdminRoutes from './routes/AdminRoutes';
app.use('/admin', AdminRoutes);

import SupervisorRoutes from './routes/SupervisorRoutes';
app.use('/supervisor', SupervisorRoutes);

import StudentRoutes from './routes/StudentRoutes';
app.use('/student', StudentRoutes);

export default app;