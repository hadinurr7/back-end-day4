import { db } from "../../config/db";

export const getExpensesService = async () => {
  try {
    const query = "select * from expenses;"; // ini

    const result = await db.query(query); // ini

    return result.rows; //ini 
    
  } catch (error) {
    throw error;
  }
};

