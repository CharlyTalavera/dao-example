import { Request, Response } from "express";
import * as Product from "../models/ProductModel";
export const getProducts = async (_req: Request, res: Response) => {
  const products = await Product.getAll();

  res.json(products);
};

export const insertProduct = async (req: Request, res: Response) => {
  if (!req.body.name)
    return res
      .status(400)
      .json({ err: "Name is required to create a product" });
  if (!req.body.cost)
    return res
      .status(400)
      .json({ err: "Cost is required to create a product" });

  const product = req.body as Product.ProductType;

  const createdProduct = await Product.insert(product);

  return res.json(createdProduct);
};
