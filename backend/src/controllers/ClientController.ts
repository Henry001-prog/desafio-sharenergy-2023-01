import { model, UpdateQuery, PaginateModel, Schema } from "mongoose";
import { Request, Response, NextFunction } from "express";
import { Client } from "../models/Client";
import { rearg } from "lodash";

interface IClient {
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
  createdAt: Date;
}

const ClientController = {
  async createClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const client: IClient = await Client.create(req.body);

      res.json(client);
    } catch {
      res
        .status(500)
        .json({ Error: "Não foi possível criar o registro na base de dados!" });
      next();
    }
  },

  async showAllClients(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { page = 1 }: any = req.query;
      const client = await Client.find();
      res.json(client);
    } catch {
      res
        .status(500)
        .json({ Error: "Não foi possível trazer os registros solicitados!" });
      next();
    }
  },

  async showClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const client = await Client.findById(req.params.id);

      res.json(client);
    } catch {
      res.status(500).json({
        Error: "Não foi possível trazer o registro específico solicitado!",
      });
      next();
    }
  },

  async updateClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.json(client);
    } catch {
      res.status(500).json({
        Error: "Não foi possível atualizar o registro na base de dados!",
      });
      next();
    }
  },

  async deleteClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      Client.findByIdAndRemove(req.params.id);

      res.json({ Success: "Registro deletado com sucesso!" });
    } catch {
      res
        .status(500)
        .json({ Error: "Não foi possível deletar o registro solicitado!" });
      next();
    }
  },
};

export default ClientController;
