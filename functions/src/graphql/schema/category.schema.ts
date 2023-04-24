import gql from "graphql-tag";

const category = gql`
  type Category {
    id: ID!
    name: String!
    date: String!
    description: String
    color: String
  }

  input CategoryInput {
    id: ID
    name: String
    date: String
    description: String
    color: String
  }
`;

export default category;
