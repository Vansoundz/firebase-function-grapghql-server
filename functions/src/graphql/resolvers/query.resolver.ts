import { budgetQueryResolver } from "./budget.resolver";
import { categoryQueryResolver } from "./category.resolver";
import { spendingQueryResolver } from "./spending.resolver";

const queryResolver = {
  ...budgetQueryResolver,
  ...categoryQueryResolver,
  ...spendingQueryResolver,
};

export default queryResolver;
