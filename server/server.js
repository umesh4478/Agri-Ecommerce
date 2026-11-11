import dotenv from 'dotenv';
dotenv.config(); // 1. Run dotenv immediately

import cors from 'cors';
import express from 'express';
import router from './routes/authRoutes.js';
import ConnectDb from './config/db.js';

console.log("server started");
console.log("TESTING MONGO URI:", process.env.MONGO_URI);

const app = express();

// 2. Only connect to the DB if the URI is loaded
if (process.env.MONGO_URI) {
    ConnectDb();
} else {
    console.log("⚠️ MONGO_URI is missing. Check your .env file.");
}

app.use(cors());
app.use(express.json());

app.use('/api/auth/', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server is running on the port ', PORT);
});