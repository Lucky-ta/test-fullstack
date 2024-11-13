import express from "express";
import statusRoutes from "./routes/status-routes";
import { initDb } from "./models/status-model";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(statusRoutes);

initDb().then(() => console.log("Banco de dados inicializado"));

export default app;
