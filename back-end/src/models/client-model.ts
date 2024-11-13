import { Database } from "sqlite";

export async function createClientTable(db: Database) {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS client (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      cpf TEXT NOT NULL,
      phone TEXT NOT NULL,
      statusId INTEGER NOT NULL,
      FOREIGN KEY (statusId) REFERENCES status(id)
    )
  `);
}
