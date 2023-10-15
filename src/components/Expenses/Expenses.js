import Cart from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 

  return (
    <Cart className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 1 && <p>Only single Expense here. Please add more...
</p>}
     <ExpensesList items={filteredExpenses}/>
    </Cart>
  );
};
export default Expenses;
