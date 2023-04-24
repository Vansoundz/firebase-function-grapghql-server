import { budgetMutationResolver } from "./budget.resolver";
import { categoryMutationResolver } from "./category.resolver";
import { spendingMutationResolver } from "./spending.resolver";

const mutationResolver = {
  ...budgetMutationResolver,
  ...categoryMutationResolver,
  ...spendingMutationResolver,
};

export default mutationResolver;
