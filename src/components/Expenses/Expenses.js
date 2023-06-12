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
  return (
    <Card className="expenses">
      <ExpensesFilter
        filterChangeHandler={filterChangeHandler}
        currentYear={currentYear}
      />

      {expenses
        .filter((item) => item.date.getFullYear().toString() === currentYear)
        .map((expense) => (
          <ExpenseItem key={expense.id} data={expense} />
        ))}
    </Card>
  );
}
