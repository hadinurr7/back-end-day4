import { Request, Response, NextFunction } from "express";
import { getExpensesService } from "../services/expense/get-expenses.service";

export const getExpensesController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await getExpensesService();
    response.status(200).send(result);
  } catch (error) {
    next(error)
  }
};
