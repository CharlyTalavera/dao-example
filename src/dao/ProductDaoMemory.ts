import { ProductType } from "../models/ProductModel";
import { nanoid } from "nanoid";
const products: ProductType[] = [];

export const find = (query?: ProductType) => {
  if (!query) return products;
  if (query.name)
    return products.filter(({ name }) => name.includes(query.name));
  if (query.cost) return products.filter(({ cost }) => cost === query.cost);
};

export const findOne = (query: ProductType) => {
  if (query.id) return products.find(({ id }) => id === query.id);

  if (query.name) return products.find(({ name }) => name.includes(query.name));
};

export const insert = (newProduct: ProductType) => {
  const toInsert = { ...newProduct, id: nanoid() };
  products.push(toInsert);

  return toInsert;
};

export const update = (id: string, toUpdate: Partial<ProductType>) => {
  const productIndex = products.findIndex(({ id: localId }) => localId === id);

  if (productIndex < 0) return;

  products[productIndex].cost = toUpdate.cost ?? products[productIndex].cost;
  products[productIndex].name = toUpdate.name ?? products[productIndex].name;
};
