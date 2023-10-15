import  './ExpenseItem.css'
// import {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Cart from '../UI/Card';
const ExpenseItem =  ({title , date , amount ,LocationOfExpenditure }) =>{
  return(
    <li>
   <Cart className="expense-item">
    <ExpenseDate date ={date}/>
    <ExpenseDetails amount={amount} title={title}/>
    {/* <ExpenseDetails amount={amount} title={title} LocationOfExpenditure={LocationOfExpenditure}/> */}
   </Cart>
    </li>
  );

}



export default  ExpenseItem;