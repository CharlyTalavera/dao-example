import { ProductType } from "../models/ProductModel";
import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (process.env.MONGO_URL)
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`Connected to ${process.env.MONGO_URL}`);
  });

const ProductSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
});

const Product = mongoose.model("products", ProductSchema);

export const find = async (query?: ProductType): Promise<ProductType[]> => {
  return (await Product.find(query || {})).map(({ _id, name, cost }) => ({
    name,
    cost,
    id: _id.toString(),
  }));
};

export const findOne = async (query: ProductType) => {
  const product = await Product.findOne({ _id: query.id });
  if (!product) return;

  return { name: product.name, cost: product.cost, id: product._id.toString() };
};

export const insert = async (newProduct: ProductType) => {
  const product = new Product(newProduct);
  const inserted = await product.save();
  return {
    id: inserted._id.toString(),
    name: inserted.name,
    cost: inserted.cost,
  };
};

export const update = (id: string, toUpdate: Partial<ProductType>) => {
  Product.updateOne({ _id: id }, { $set: { toUpdate } });
};
