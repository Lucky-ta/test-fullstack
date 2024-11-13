import { Request, Response, Router } from "express";
import { connect } from "../models/init-db";

const router = Router();

router.get("/client", async (_req, res) => {
  const db = await connect();

  const clients = await db.all(`
    SELECT client.id, client.name, client.email, client.cpf, client.phone, status.id AS statusId, status.text, status.color
    FROM client
    JOIN status ON client.statusId = status.id
  `);

  const formattedClients = clients.map((client) => ({
    ...client,
    status: {
      id: client.statusId,
      text: client.text,
      color: client.color,
    },
  }));

  const responseClients = formattedClients.map((client) => {
    const { statusId, text, color, ...rest } = client;
    return {
      ...rest,
      status: { id: statusId, text, color },
    };
  });

  res.json(responseClients);
});

router.get("/client/:id", async (req: Request, res: Response): Promise<any> => {
  const db = await connect();
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID é obrigatório." });
  }

  try {
    const client = await db.get(
      `SELECT client.id, client.name, client.email, client.cpf, client.phone, status.id AS statusId, status.text, status.color
      FROM client
      JOIN status ON client.statusId = status.id
      WHERE client.id = ?`,
      [id]
    );

    if (!client) {
      return res.status(404).json({ message: "Cliente não encontrado." });
    }

    const formattedClient = {
      ...client,
      status: {
        id: client.statusId,
        text: client.text,
        color: client.color,
      },
    };

    const { statusId, text, color, ...rest } = formattedClient;
    res.json({
      ...rest,
      status: { id: statusId, text, color },
    });
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar cliente.", error: err });
  }
});

router.post("/client", async (req: Request, res: Response): Promise<any> => {
  const db = await connect();
  const { name, email, cpf, phone, statusId } = req.body;

  if (!name || !email || !cpf || !phone || !statusId) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  const existingUser = await db.get(
    `SELECT * FROM client WHERE email = ? OR cpf = ?`,
    [email, cpf]
  );

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Usuário já cadastrado com este email ou CPF." });
  }

  try {
    await db.run(
      `INSERT INTO client (name, email, cpf, phone, statusId) VALUES (?, ?, ?, ?, ?)`,
      [name, email, cpf, phone, statusId]
    );
    res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar usuário.", error: err });
  }
});

router.put("/client/:id", async (req: Request, res: Response): Promise<any> => {
  const db = await connect();
  const { id } = req.params;
  const { name, email, cpf, phone, statusId } = req.body;

  if (!name || !email || !cpf || !phone || !statusId) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    const client = await db.get(`SELECT * FROM client WHERE id = ?`, [id]);

    if (!client) {
      return res.status(404).json({ message: "Cliente não encontrado." });
    }

    const existingUser = await db.get(
      `SELECT * FROM client WHERE (email = ? OR cpf = ?) AND id != ?`,
      [email, cpf, id]
    );

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Já existe um usuário com este email ou CPF." });
    }

    await db.run(
      `UPDATE client SET name = ?, email = ?, cpf = ?, phone = ?, statusId = ? WHERE id = ?`,
      [name, email, cpf, phone, statusId, id]
    );

    res.status(200).json({ message: "Cliente atualizado com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao atualizar cliente.", error: err });
  }
});

export default router;
