import express, { Request, Response, NextFunction } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import { connectToDatabase } from "../../config/mongoConnection";
import RateLimiter from "./middlewares/RateLimiter";

dotenv.config();

const app = express();
const rateLimiter = new RateLimiter();
connectToDatabase();
app.use(cors());
app.use(express.json());
app.use(rateLimiter.limiter())
app.use(routes);

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
}

export default app;