import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses({ expenses }) {
  const [currentYear, setCurrentYear] = useState("2019");

  const filterChangeHandler = (filteredYear) => {
    setCurrentYear(filteredYear);
  };

  let filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === currentYear
  );

  let expensesContent = filteredExpenses.length ? (
    filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} data={expense} />
    ))
  ) : (
    <p>No Expenses Found!</p>
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        filterChangeHandler={filterChangeHandler}
        currentYear={currentYear}
      />

      {expensesContent}
    </Card>
  );
}
