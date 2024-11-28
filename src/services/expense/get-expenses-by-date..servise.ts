import { format } from "date-fns";

import { db } from "../../config/db";
import { Expense } from "../../types/expense";

export const getExpenseByDateService = async (
  startDate: string,
  endDate: string
) => {
  try {
    const start = format(new Date(startDate), "yyyy-MM-dd HH:mm:ss");
    const end = format(new Date(endDate), "yyyy-MM-dd HH:mm:ss");
    const query = `
        select * from expenses 
        where date between '${start}' and '${end}';
    `;
    const { rows } = await db.query<Expense>(query);
    const total = rows.reduce((a, b) => a + b.nominal, 0);

    return {
      data: rows,
      total,
    };
  } catch (error) {
    throw error;
  }
};
