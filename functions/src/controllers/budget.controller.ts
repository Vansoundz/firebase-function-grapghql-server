import { IBudget } from "../models";
import {
  addItem,
  getItem,
  getItems,
  //   getItemsWhere,
  updateItem,
} from "../utils/firebase";

const createBudget = async (budget: Partial<IBudget>) => {
  if (!budget.date) budget.date = new Date().toISOString();
  const b = await addItem("budget", budget);
  return b;
};

const getBudgets = async () => {
  const items = await getItems("budget");
  return items;
};

// const getBudgetsWhere = async (categoryId: string) => {
//   const where = { categoryId };
//   const items = await getItemsWhere("budget", where);
//   return items;
// };

const getBudget = async (id: string) => {
  const item = await getItem("budget", id);
  return item;
};

const updateBudget = async (id: string, budget: Partial<IBudget>) => {
  const b = await updateItem("budget", id, budget);
  return b;
};

export { createBudget, getBudgets, getBudget, updateBudget };
