import ExpenseItem from "../expenseItem/ExpenseItem";
import "./expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => {
        const { id, title, amount, date } = expense;
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </div>
  );
};

export default Expenses;
