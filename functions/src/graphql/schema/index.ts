import budget from "./budget.schema";
import category from "./category.schema";
import mutation from "./mutation.schema";
import query from "./query.schema";
import spending from "./spending.schema";

const typeDefs = [category, budget, spending, query, mutation];

export default typeDefs;
