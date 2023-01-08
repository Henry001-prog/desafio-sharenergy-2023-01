import { Schema, model, PaginateModel, Document } from "mongoose";
import paginate from "mongoose-paginate-v2";

interface IClient extends Document {
    name: string;
    email: string;
    phone: string;
    address: string;
    cpf: string;
    createdAt: Date;
}

interface IClientDocument extends Document, IClient {}

const ClientSchema = new Schema<IClient>({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

ClientSchema.plugin(paginate);

export const Client = model<IClientDocument, PaginateModel<IClientDocument>>(
  "Client",
  ClientSchema
);
