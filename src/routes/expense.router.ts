import {
  createExpenseController,
  deleteExpenseController,
  getExpenseController,
  getExpensesByCategoryController,
  getExpensesByDateController,
  getExpensesController,
  updateExpenseController,
} from "../controllers/expense.controller";
import express from "express";

const router = express.Router();

// mendapatkan semua data expense
router.get("/", getExpensesController);

// mendapat data berdasar kategori
router.get("/filter/category", getExpensesByCategoryController);


// mendapat data berdasar tanggal
router.get("/filter/Date", getExpensesByDateController);

// mendapat isi data expense spesifik by id
router.get("/:id", getExpenseController);

// membuat data
router.post("/", createExpenseController);
export default router;

// delete expense by id
router.delete("/:id", deleteExpenseController);

// update expense by id
router.patch("/:id", updateExpenseController);
