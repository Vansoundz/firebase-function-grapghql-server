import {
  createBudget,
  getBudgets,
  getBudget,
  updateBudget,
} from "../../controllers/budget.controller";
import { getCategory } from "../../controllers/category.controller";
import { getSpendingsWhere } from "../../controllers/spending.controller";
import { IBudget } from "../../models";

const budgetQueryResolver = {
  budgets: async () => {
    return await getBudgets();
  },
  budget: async (_: any, args: { id: string }) => {
    const { id } = args;
    return await getBudget(id);
  },
};

const budgetMutationResolver = {
  saveBudget: async (_: any, args: { budget: Partial<IBudget> }) => {
    const { budget } = args;

    if (budget.id) {
      const id = budget.id;
      delete budget.id;
      return await updateBudget(id, budget);
    }
    return await createBudget(budget);
  },
};

const budgetNestedResolver = {
  Budget: {
    category: async (budget: IBudget) => {
      console.log({ budget });
      return await getCategory(budget.categoryId);
    },
    spendings: async (budget: IBudget) => {
      return await getSpendingsWhere(budget.id);
    },
  },
};

export { budgetQueryResolver, budgetMutationResolver, budgetNestedResolver };
