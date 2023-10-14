import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props)=>{
  const newExpenseHandler = (expense)=>{
    const newExpense = {
      ...expense,
      id : Math.random().toString(),
    }
    console.log(newExpense)

    props.onAddExpense(newExpense);
  }
  return <div className = "new-expense" >
  <ExpenseForm onNewExpense = {newExpenseHandler}/>;
   </div>
};

export default NewExpense;