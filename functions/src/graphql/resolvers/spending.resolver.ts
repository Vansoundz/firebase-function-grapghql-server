import { getBudget } from "../../controllers/budget.controller";
import {
  createSpending,
  getSpending,
  getSpendings,
  updateSpending,
} from "../../controllers/spending.controller";
import { ISpending } from "../../models";

const spendingQueryResolver = {
  spendings: async () => {
    return await getSpendings();
  },
  spending: async (_: any, args: { id: string }) => {
    const { id } = args;
    return await getSpending(id);
  },
};

const spendingMutationResolver = {
  saveSpending: async (_: any, args: { spending: Partial<ISpending> }) => {
    const { spending } = args;

    if (spending.id) {
      const id = spending.id;
      delete spending.id;
      return await updateSpending(id, spending);
    }
    return await createSpending(spending);
  },
};

const spendingNestedResolver = {
  Spending: {
    budget: async (spending: ISpending) => {
      return await getBudget(spending.budgetId);
    },
  },
};

export {
  spendingQueryResolver,
  spendingMutationResolver,
  spendingNestedResolver,
};
