import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
const dumyExpense = [
  {title : "Food" , date : new Date(2012 , 4, 33),amount : 42.83, LocationOfExpenditure : "Madhbi Restro"},
  {title : "Study" , date : new Date(2011 , 8, 23),amount : 43.53, LocationOfExpenditure : "Deep Bookstole"},
  {title : "Petrol" , date : new Date(2022 , 6, 13),amount : 32.32, LocationOfExpenditure : "Nayara Palanpur"},
  {title : "Game" , date : new Date(2013 , 4, 5),amount : 40.43, LocationOfExpenditure : "Gaming Zone"},
];
function App() {
  const [expenses , setExpense] = useState(dumyExpense);
  
  const  addExpenseHandler = (expense)=>{
    setExpense((prevExpenses)=>{
      return [expense , ...prevExpenses];
    })
  }
  return (
    <div>
       <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses expenses={expenses}/>  
    </div>
  );
}

export default App;
