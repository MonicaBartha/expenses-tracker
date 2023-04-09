import React from 'react';
import ExpensesItem from './ExpensesItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] =
    React.useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
    </Card>
  );
};

export default Expenses;
