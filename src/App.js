import { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
const dumyExpense = [
  {id : 'e1' ,title : "Food" , date : new Date(2022 , 4, 33),amount : 42.83, LocationOfExpenditure : "Madhbi Restro"},
  {id : 'e2',title : "Study" , date : new Date(2022 , 8, 23),amount : 43.53, LocationOfExpenditure : "Deep Bookstole"},
  {id : 'e3',title : "Petrol" , date : new Date(2023 , 6, 13),amount : 32.32, LocationOfExpenditure : "Nayara Palanpur"},
  {id : 'e4',title : "Game" , date : new Date(2023 , 4, 5),amount : 40.43, LocationOfExpenditure : "Gaming Zone"},
  {id : 'e5' ,title : "Game" , date : new Date(2020 , 4, 5),amount : 40.43, LocationOfExpenditure : "Gaming Zone"},
];
function App() {
  const [expenses , setExpense] = useState(dumyExpense);
  
  const  addExpenseHandler = (expense)=>{
    setExpense((prevExpenses)=>{
      return [expense , ...prevExpenses];
    });

    localStorage.setItem("expenses" , JSON.stringify(expenses));
  }
  useEffect(()=>{
   let newExpenses =  localStorage.getItem('expenses');
   newExpenses = JSON.parse(newExpenses);
   console.log("this is the getting expense", newExpenses);
   newExpenses = newExpenses.map((expense)=>{
     return {...expense , date : new Date(expense.date)};
   })
   newExpenses ? setExpense(newExpenses) : setExpense(dumyExpense);
  },[]);
  return (
    <div>
       <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses expenses={expenses}/>   
    </div>
  );
}

export default App;
