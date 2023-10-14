import  './ExpenseItem.css'
const ExpenseDetails =  ({amount , title , LocationOfExpenditure}) =>{
  return (
    <div className="expense-item__description">
       <h2>{title}</h2> {/*  <span>({LocationOfExpenditure})</span> */}
      <div className="expense-item__price">${amount}</div>
    </div>
  )
}


export default ExpenseDetails;