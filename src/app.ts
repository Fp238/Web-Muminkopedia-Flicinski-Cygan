import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

import characterRoutes from "./routes/characterRoutes";
import artifactRoutes from "./routes/artifactRoutes";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static files (jeśli potrzebne)
app.use(express.static(path.join(__dirname, "../public")));

// Test route
app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

// Routes
app.use("/api/characters", characterRoutes);
app.use("/api/artifacts", artifactRoutes);

// MongoDB connection + start server
const PORT = process.env.PORT || 3001;

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);

        console.log("Połączono z MongoDB");

        app.listen(PORT, () => {
            console.log(`Serwer działa na porcie ${PORT}`);
        });
    } catch (err) {
        console.error("Błąd połączenia:", err);
    }
}

startServer();

export default app;