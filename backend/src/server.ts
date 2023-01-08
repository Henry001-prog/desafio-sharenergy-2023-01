import express from "express";
import { connect, ConnectOptions } from "mongoose";
import requireDir from "require-dir";
import allowCors from "./config/cors";
import mongoose from "mongoose";
import 'dotenv/config';
import { routesApi } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allowCors);

async function runDB(): Promise<void> {
  mongoose.set("strictQuery", false);
  await connect("mongodb://127.0.0.1:27017/clients", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
}

runDB();

requireDir("./models");

app.use(routesApi);

const port = 3005;

app.listen(port, () => {
  console.log("Server is running on PORT 3005");
});
