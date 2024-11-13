import { Database } from "sqlite";

export async function createStatusTable(db: Database) {
  const initialStatuses = [
    {
      id: 1,
      color: "#4aad5b",
      text: "Ativo",
    },
    {
      id: 2,
      color: "#d13541",
      text: "Inativo",
    },
    {
      id: 3,
      color: "#d3a710",
      text: "Aguardando ativação",
    },
    {
      id: 4,
      color: "#d2d2d2",
      text: "Desativado",
    },
  ];

  await db.exec(`
    CREATE TABLE IF NOT EXISTS status (
      id INTEGER PRIMARY KEY,
      text TEXT NOT NULL,
      color TEXT NOT NULL
    )
  `);

  for (const status of initialStatuses) {
    await db.run(
      `
      INSERT INTO status (id, text, color)
      VALUES (?, ?, ?)
    `,
      [status.id, status.text, status.color]
    );
  }
}
