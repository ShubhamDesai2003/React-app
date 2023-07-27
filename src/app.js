import React,  { useState } from 'react';

import NewExpense from './Components/NewExpense/NewExpense';

import Expences from "./Components/Expenses/Expences";
// import expense from "./Components/expences.json"


let DUMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 250,
    date: new Date(2023, 7, 21)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 230,
    date: new Date(2023, 7, 20)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 240,
    date: new Date(2023, 7, 19)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 200,
    date: new Date(2023, 7, 18)
  }
];  


const App = ()=>{

  const [expenses, setExpenses] = useState(DUMY_EXPENSE);

  const addExpenseHandler = (expense)=>{
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  }

  return (
    <div>

      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expences item={expenses}/>
    </div>

  );
}

export default App;