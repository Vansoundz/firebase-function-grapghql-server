import { ICategory } from "../models";
import { addItem, getItem, getItems, updateItem } from "../utils/firebase";

const createCategory = async (category: Partial<ICategory>) => {
  if (!category.date) category.date = new Date().toISOString();
  const c = await addItem("category", category);
  return c;
};

const getCategories = async () => {
  const items = await getItems("category");
  return items;
};

const getCategory = async (id: string) => {
  const item = await getItem("category", id);
  return item;
};

const updateCategory = async (id: string, category: Partial<ICategory>) => {
  const c = await updateItem("category", id, category);
  return c;
};

export { createCategory, getCategories, getCategory, updateCategory };
