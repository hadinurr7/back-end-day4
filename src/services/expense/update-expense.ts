import { db } from "../../config/db";
import { Expense } from "../../types/expense";

export const updateExpenseService = async (
  id: number,
  body: Partial<Expense>
) => {
  try {
    const existingQuery = `select * from expenses where id = ${id};`;
    const { rows } = await db.query<Expense>(existingQuery);

    if (!rows.length) {
      throw new Error("Expense not found");
    }

    let query = `update expenses set`;
    const keys = Object.keys(body) as (keyof Expense)[];

    keys.forEach((key, index) => {
      query += ` ${key} = '${body[key]}'`;
      if (index !== keys.length - 1) {
        query += ", ";
      }
    });

    query += ` where id = ${id};`;

    await db.query(query);
    return { message: "Expense updated successfully" };
  } catch (error) {
    throw error;
  }
};
