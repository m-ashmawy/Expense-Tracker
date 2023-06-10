import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onAddNewExpense = (sumbittedExpense) => {
    props.onSaveNewExpense(sumbittedExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={onAddNewExpense} />
    </div>
  );
};

export default NewExpense;
