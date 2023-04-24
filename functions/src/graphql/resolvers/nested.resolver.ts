import { budgetNestedResolver } from "./budget.resolver";
import { spendingNestedResolver } from "./spending.resolver";

const nestedResolver = {
  ...budgetNestedResolver,
  ...spendingNestedResolver,
};

export default nestedResolver;
