import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';


export const connectToDatabase = async ()=>{
    try {
        dotenv.config();
        const mongoUri = process.env.MONGO_URL;
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in the environment variables");
        }

        await mongoose.connect(mongoUri, {} as ConnectOptions);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}