import React from "react";

function AddButton(props) {
  const clickHandler = () => {
    props.fullFormHandler(true);
  };
  return <button onClick={clickHandler}>Add New Expense</button>;
}

export default AddButton;
