import { Request, Response, NextFunction } from "express";
import express from "express";
import { PORT } from "./config/env";
import expenseRouter from "./routes/expense.router";

const app = express();

app.use(express.json());

app.use("/expenses", expenseRouter);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(400).send(error.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server Running On PORT : ${PORT}`);
});
