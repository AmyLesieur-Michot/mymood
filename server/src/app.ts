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

export default app;