import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ filteredExpenses }) {
  if (filteredExpenses.length)
    return (
      <ul className="expenses-list">
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} data={expense} />
        ))}
      </ul>
    );

  return <h2 className="expenses-list__fallback">No Expenses Found!</h2>;
}

export default ExpensesList;
