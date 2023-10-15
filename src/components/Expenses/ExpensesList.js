import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props)=>{
  console.log("id list",props.items.map(expense => expense.id))
 if(props.items.length === 0 ){
  return <h2 className='expenses-list__follback'>Found no expenses.</h2>
 }
 return(
  <ul className="expenses-list">
  {
  props.items.map(expense => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
    
  ))
}    
  </ul>
 )
}
export default ExpensesList;