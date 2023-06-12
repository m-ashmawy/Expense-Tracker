import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses({ expenses }) {
  const [currentYear, setCurrentYear] = useState("2019");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const filterChangeHandler = (filteredYear) => {
    setCurrentYear(filteredYear);
    setFilteredExpenses(
      expenses.filter(
        (item) => item.date.getFullYear().toString() === filteredYear
      )
    );
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        filterChangeHandler={filterChangeHandler}
        currentYear={currentYear}
      />

      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
      {/* {expenses.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))} */}
    </Card>
  );
}
