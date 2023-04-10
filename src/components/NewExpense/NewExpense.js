import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] =
    React.useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const enteredData = {
      // enteredExpenseData is the object expenseDate from ExpenseForm and
      // add an id
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(enteredData);
    setIsAddingExpense(false);
  };
  const showFormHandler = () => {
    setIsAddingExpense(true);
  };
  const cancelFormHandler = () => {
    setIsAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button onClick={showFormHandler}>
          Add New Expense
        </button>
      )}
      {isAddingExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelForm={cancelFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
