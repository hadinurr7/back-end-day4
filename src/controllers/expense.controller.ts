import { Request, Response, NextFunction } from "express";
import { getExpensesService } from "../services/expense/get-expenses.service";
import { getExpenseService } from "../services/expense/get-expense.service";
import { createExpenseService } from "../services/expense/create-expense.service";
import { Expense } from "../types/expense";
import { deleteExpenseService } from "../services/expense/delete-expense.service";
import { updateExpenseService } from "../services/expense/update-expense";
import { getExpenseByCategoryService } from "../services/expense/get-expenses-by-category..servise";
import { getExpenseByDateService } from "../services/expense/get-expenses-by-date..servise";

// get semua data
export const getExpensesController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await getExpensesService();
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// membuat data baru
export const createExpenseController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const expenseData: Expense = request.body;
    const result = await createExpenseService(expenseData);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// get 1 data by id
export const getExpenseController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id = request.params.id;
    const expense = await getExpenseService(Number(id));
    response.status(200).send(expense);
  } catch (error) {
    next(error);
  }
};

// menghapus data by id
export const deleteExpenseController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { id } = request.params;
    const result = await deleteExpenseService(Number(id));
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// update data by id
export const updateExpenseController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { id } = request.params;
    const expenseData: Expense = request.body;
    const result = await updateExpenseService(Number(id), expenseData);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getExpensesByCategoryController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const category = request.query.category as string;
    const result = await getExpenseByCategoryService(category);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getExpensesByDateController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const startDate = request.query.startDate as string;
    const endDate = request.query.endDate as string;
    const result = await getExpenseByDateService(startDate, endDate);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};


