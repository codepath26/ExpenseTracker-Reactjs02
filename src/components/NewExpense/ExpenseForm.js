import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props)=>{
  const [ enteredTitle , setEnteredTitle] = useState('');
  const [ enteredDate , setEnteredDate] = useState('');
  const [ enteredAmount , setEnteredAmount] = useState('');


   
 

  const titleChangeHandler = (e)=>{
    setEnteredTitle(e.target.value);
  }
  const dateChangeHandler = (e)=>{
    setEnteredDate(e.target.value);
  }
  const amountChangeHandler = (e)=>{
    setEnteredAmount(e.target.value);
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate),
    }
    console.log(expenseData);
    props.onNewExpense(expenseData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  } 

   return   (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
    <div className="new-expense__control">
    <label>Title</label>
    <input type="text"  value={enteredTitle} onChange={titleChangeHandler}/>
    </div>
    <div className="new-expense__control">
    <label>Number</label>
    <input type="number" value={enteredAmount} min="0.01" step="0.01"  onChange={amountChangeHandler}/>
    </div>
    <div className="new-expense__control">
    <label>Date</label>
    <input type="date" value={enteredDate} min="2015-01-01" max="2028-12-31" onChange={dateChangeHandler} />
    </div>
    </div>
    <div className="new-expense__actions">
    <button type='button' onClick={props.stopEditing}>Cancle</button>
    <button type = "submit"> Add Expense</button>
    </div>
    </form>

   )
}
export default ExpenseForm;