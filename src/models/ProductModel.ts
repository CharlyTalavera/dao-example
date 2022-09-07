import * as ProductDaoMemory from "../dao/ProductDaoMemory";
import * as ProductDaoMongo from "../dao/ProductDaoMongo";

export type ProductType = {
  id: string;
  name: string;
  cost: number;
};

type DaoTypes = typeof ProductDaoMemory | typeof ProductDaoMongo;

let ProductDao: DaoTypes = ProductDaoMemory;

if (process.env.MONGO_URL) ProductDao = ProductDaoMongo;

export const getAll = async () => {
  return ProductDao.find();
};

export const insert = async (product: ProductType) => {
  return ProductDao.insert(product);
};
