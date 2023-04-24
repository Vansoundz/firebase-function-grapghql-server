import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../../controllers/category.controller";
import { ICategory } from "../../models";

const categoryQueryResolver = {
  categories: async () => {
    return await getCategories();
  },
  category: async (_: any, args: { id: string }) => {
    const { id } = args;
    return await getCategory(id);
  },
};

const categoryMutationResolver = {
  saveCategory: async (_: any, args: { category: Partial<ICategory> }) => {
    const { category } = args;

    if (category.id) {
      const id = category.id;
      delete category.id;
      return await updateCategory(id, category);
    }
    return await createCategory(category);
  },
};

export { categoryQueryResolver, categoryMutationResolver };
