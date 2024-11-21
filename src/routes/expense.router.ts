import { getExpensesController } from "../controllers/expense.controller";
import express from "express";

const router = express.Router();

router.get("/", getExpensesController);

export default router;
