import { ISpending, Where } from "../models";
import {
  addItem,
  getItem,
  getItems,
  getItemsWhere,
  updateItem,
} from "../utils/firebase";

const createSpending = async (spending: Partial<ISpending>) => {
  if (!spending.date) spending.date = new Date().toISOString();
  const b = await addItem("spending", spending);
  return b;
};

const getSpendings = async () => {
  const items = await getItems("spending");
  return items;
};

const getSpending = async (id: string) => {
  const item = await getItem("spending", id);
  return item;
};

const updateSpending = async (id: string, spending: Partial<ISpending>) => {
  const b = await updateItem("spending", id, spending);
  return b;
};

const getSpendingsWhere = async (budgetId: string) => {
  const where: Where = {
    key: "budgetId",
    value: budgetId,
  };
  const items = await getItemsWhere("spending", where);
  return items;
};

export {
  createSpending,
  getSpendings,
  getSpending,
  updateSpending,
  getSpendingsWhere,
};
