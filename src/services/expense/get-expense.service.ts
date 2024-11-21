import { db } from "../../config/db";
import { DataExpense } from "../../types";

export const getExpenseService = async (id: number) => {
  try {
    const query = "select * from expenses;"; // ini
    const result: DataExpense = await db.query(query); // ini

    const expense = result.expenses.find((expense) => expense.id === id);

    if (!expense) {
      throw new Error("expense not found");
    }

    return expense;
  } catch (error) {
    throw error;
  }
};
