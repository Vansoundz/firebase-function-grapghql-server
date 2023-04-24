import gql from "graphql-tag";

const spending = gql`
  type Spending {
    id: ID!
    date: String!
    budgetId: ID!
    amount: Int!
    description: String
    budget: Budget
  }

  input SpendingInput {
    id: ID
    date: String
    budgetId: ID
    amount: Int
    description: String
  }
`;

export default spending;
