import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props)=>{
  const [ enteredTitle , setEnteredTitle] = useState('');
  const [ enteredDate , setEnteredDate] = useState('');
  const [ enteredAmount , setEnteredAmount] = useState('');
  // const [userInput , setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount:'',
  //   enteredDate: ''
  // })
  const titleChangeHandler = (e)=>{
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // })
    
    // another safer way to use the updation

    // setUserInput ( (prevState)=>{
    //   return {...prevState , enteredTitle : e.target.value};
    // })
   
  }
  const dateChangeHandler = (e)=>{
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // })
  }
  const amountChangeHandler = (e)=>{
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // })
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
return <form onSubmit={submitHandler}>
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
      <input type="date" value={enteredDate} min="2023-01-01" max="2028-12-31" onChange={dateChangeHandler} />
    </div>
  </div>
  <div className="new-expense__actions">
    <button type = "submit"> Add Expense</button>
  </div>
</form>
}
export default ExpenseForm;