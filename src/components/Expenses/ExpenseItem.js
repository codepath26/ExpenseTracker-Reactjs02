import  './ExpenseItem.css'
// import {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Cart from '../UI/Card';
const ExpenseItem =  ({index,title , date , amount ,LocationOfExpenditure , onDeleteExpense}) =>{

  return(
   <Cart className="expense-item">
    <ExpenseDate date ={date}/>
    <ExpenseDetails amount={amount} title={title}/>
    {/* <ExpenseDetails amount={amount} title={title} LocationOfExpenditure={LocationOfExpenditure}/> */}
   </Cart>
  );

}



export default  ExpenseItem;