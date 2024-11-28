import { db } from "../../config/db";
import { Expense } from "../../types/expense";

export const deleteExpenseService = async (id: number) => {
  try {
    const existingQuery = `select * from expenses where id = ${id};`;
    const deleteQuery = `delete from expenses where id = ${id};`;

    const { rows } = await db.query<Expense>(existingQuery);

    if (!rows.length) {
      throw new Error("expense not found");
    }

    await db.query(deleteQuery);

    return{
      message : "delete expanse succes"
    }

  } catch (error) {
    throw error;
  }
};
