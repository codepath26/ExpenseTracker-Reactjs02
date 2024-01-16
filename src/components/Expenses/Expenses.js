import Cart from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  console.log("this is the expense which i got form the local storage bro what can i helo you" , expenses)
  const [filteredYear, setFilteredYear] = useState("2020");
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(expenses , "this is the expense")
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log("filterexpense",filteredExpenses)
 

  return (
    <Cart className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 1 && <p>Only single Expense here. Please add more...
</p>}
    <ExpensesChart expenses  ={filteredExpenses}/>
     <ExpensesList items={filteredExpenses}/>
    </Cart>
  );
};
export default Expenses;
