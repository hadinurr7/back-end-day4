import { db } from "../../config/db";

export const getExpensesService = async () => {
  try {
    const query = "select * from expenses;";
    const result = await db.query(query);

    return result.rows; 
    
  } catch (error) {
    throw error;
  }
};

