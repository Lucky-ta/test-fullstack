import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function connect() {
  return open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

export async function initDb() {
  const db = await connect();

  const initialStatuses = [
    {
      color: "#4aad5b",
      text: "Ativo",
    },
    {
      color: "#d13541",
      text: "Inativo",
    },
    {
      color: "#d3a710",
      text: "Aguardando ativação",
    },
    {
      color: "#d2d2d2",
      text: "Desativado",
    },
  ];

  await db.exec(`
    CREATE TABLE IF NOT EXISTS status (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      color TEXT NOT NULL
    )
  `);

  for (const status of initialStatuses) {
    await db.run(
      `
      INSERT INTO status (text, color)
      VALUES (?, ?)
    `,
      [status.text, status.color]
    );
  }
}
