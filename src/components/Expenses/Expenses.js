import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      <ExpenseItem data={expenses[0]} />
      <ExpenseItem data={expenses[1]} />
      <ExpenseItem data={expenses[2]} />
      <ExpenseItem data={expenses[3]} />
    </Card>
  );
}
