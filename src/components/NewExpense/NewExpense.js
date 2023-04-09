import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const enteredData = {
      // enteredExpenseData is the object expenseDate from ExpenseForm and
      // add an id
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(enteredData);
    console.log(enteredData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
