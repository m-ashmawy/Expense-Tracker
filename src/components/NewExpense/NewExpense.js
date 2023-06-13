import React, { useState } from "react";
import AddButton from "./AddButton";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [fullForm, setFullForm] = useState(false);
  const onAddNewExpense = (sumbittedExpense) => {
    props.onSaveNewExpense(sumbittedExpense);
  };

  const fullFormHandler = (shown) => {
    setFullForm(shown);
  };

  let shownContent = fullForm ? (
    <ExpenseForm
      onAddNewExpense={onAddNewExpense}
      fullFormHandler={fullFormHandler}
    />
  ) : (
    <AddButton fullFormHandler={fullFormHandler} />
  );

  return <div className="new-expense">{shownContent}</div>;
};

export default NewExpense;
