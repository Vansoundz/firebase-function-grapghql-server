import gql from "graphql-tag";

const query = gql`
  type Query {
    budgets: [Budget]
    spendings: [Spending]
    categories: [Category]

    budget(id: ID!): Budget
    spending(id: ID!): Spending
    category(id: ID!): Category
  }
`;

export default query;
