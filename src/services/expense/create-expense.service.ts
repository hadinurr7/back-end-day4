import { db } from "../../config/db";
import { Expense } from "../../types/expense";

export const createExpenseService = async (body: Expense) => {
  const { title, nominal, status, category, date } = body;

  try {
    const query = `insert into expenses 
    (title, nominal, status, category, date) 
    values ('${title}', ${nominal}, '${status}', '${category}', '${date}');`;

    const result = await db.query(query);

    return { message: "Expense created successfully" };
  } catch (error) {
    throw error;
  }
};
