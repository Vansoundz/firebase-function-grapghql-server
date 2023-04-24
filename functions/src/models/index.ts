interface ICategory {
  id: string;
  name: string;
  date: string;
  description: string;
  color: string;
}

interface IBudget {
  id: string;
  name: string;
  date: string;
  categoryId: string;
  amount: number;
  description: string;
  color: string;
}

interface ISpending {
  id: string;
  date: string;
  budgetId: string;
  amount: number;
  description: string;
}

type Where = {
  key: string;
  value: string | number;
};

export type { ICategory, IBudget, ISpending, Where };
