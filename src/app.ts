import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, '../.env') });
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('Połączono z MongoDB'))
    .catch((err) => console.error('Błąd połączenia:', err));

const app = express();

app.use(cors());
app.use(express.json()); // Parsowanie JSON w requestach

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

app.listen(3001, () => {
    console.log('Serwer działa na porcie 3001');
});

export default app;