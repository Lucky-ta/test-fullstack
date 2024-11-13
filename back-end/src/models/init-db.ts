import sqlite3 from "sqlite3";
import { open } from "sqlite";

import { createClientTable } from "./client-model";
import { createStatusTable } from "./status-model";

export async function connect() {
  return open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

export async function initDb() {
  const db = await connect();

  await createStatusTable(db);
  await createClientTable(db);

  console.log("Banco de dados inicializado com sucesso!");
}
