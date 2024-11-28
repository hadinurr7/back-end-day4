import { db } from "../../config/db";
import { Expense } from "../../types/expense";

export const getExpenseByCategoryService = async (category: string) => {
  try {
    const query = `select  * from expenses where category like = '%${category}%';`;
    const { rows } = await db.query<Expense>(query);

    const total = rows.reduce((a, b) => a + b.nominal, 0);

    return {
      daya: rows,
      total,
    };
  } catch (error) {
    throw error;
  }
};
