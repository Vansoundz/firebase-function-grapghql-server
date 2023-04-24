import gql from "graphql-tag";

const mutation = gql`
  type Mutation {
    saveBudget(budget: BudgetInput): Budget
    saveSpending(spending: SpendingInput): Spending
    saveCategory(category: CategoryInput): Category
  }
`;

export default mutation;
