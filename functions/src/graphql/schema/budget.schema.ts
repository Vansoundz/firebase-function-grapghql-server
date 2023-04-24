import gql from "graphql-tag";

const budget = gql`
  type Budget {
    id: ID!
    name: String!
    date: String!
    categoryId: ID!
    amount: Int!
    description: String
    color: String
    spendings: [Spending]
    category: Category
  }

  input BudgetInput {
    id: ID
    name: String
    date: String
    categoryId: ID
    amount: Int
    description: String
    color: String
  }
`;

export default budget;
