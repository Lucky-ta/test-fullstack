import { Router } from "express";
import { connect } from "../models/init-db";

const router = Router();

router.get("/status", async (_req, res) => {
  const db = await connect();
  const status = await db.all("SELECT * FROM status");
  res.json(status);
});

export default router;
