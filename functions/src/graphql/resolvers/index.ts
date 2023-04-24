import Mutation from "./mutation.resolver";
import nestedResolver from "./nested.resolver";
import Query from "./query.resolver";

const resolveFunctions = {
  Query,
  Mutation,
  ...nestedResolver,
};

export default resolveFunctions;
