import cors from "cors";
import express from "express";
import { initDb } from "./models/init-db";
import statusRoutes from "./routes/status-routes";
import clientRoutes from "./routes/client-routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(statusRoutes);
app.use(clientRoutes);

initDb().then(() => console.log("Banco de dados inicializado"));

export default app;
