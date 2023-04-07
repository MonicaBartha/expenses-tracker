import ExpensesItem from './ExpensesItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpensesItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
    </div>
  );
}

export default Expenses;
