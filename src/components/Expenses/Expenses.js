import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses({ expenses }) {
  const [currentYear, setCurrentYear] = useState("2019");

  const filterChangeHandler = (filteredYear) => {
    setCurrentYear(filteredYear);
  };

  let filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === currentYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterChangeHandler={filterChangeHandler}
        currentYear={currentYear}
      />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
