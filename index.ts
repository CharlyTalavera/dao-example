import express from "express";
import dotenv from "dotenv";
import { Server } from "http";
import ProductRoute from "./src/routes/ProductRoute";
const app = express();

dotenv.config();

app.use(express.json());
app.use("/product", ProductRoute);

app.listen(process.env.PORT || 3000, function (this: Server) {
  const address = this.address();
  if (typeof address === "string") return console.log(`Running on ${address}`);
  console.log(`Running on port ${address?.port}`);
});
