import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.13,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const onSaveNewExpense = (sumbittedExpense) => {
    const fullNewExpense = {
      ...sumbittedExpense,
      id: Math.random().toString(),
    };
    setExpenses((prevState) => [fullNewExpense, ...prevState]);
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={onSaveNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
