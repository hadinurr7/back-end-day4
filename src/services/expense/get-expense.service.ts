import { db } from "../../config/db";
import { Expense } from "../../types/expense";

export const getExpenseService = async (id: number) => {
  try {
    const query = `select  * from expenses where id = ${id};`;
    const { rows } = await db.query<Expense>(query);

    if (!rows.length) {
      throw new Error("expense not found");
    }

    return rows;
  } catch (error) {
    throw error;
  }
};
