import React,  { useState, useEffect } from 'react';

import NewExpense from './Components/NewExpense/NewExpense';

import Expences from "./Components/Expenses/Expences";
import expense from "./Components/expences.json";


// let DUMY_EXPENSE = [];  


const App = ()=>{

  // const [expenses, setExpenses] = useState(DUMY_EXPENSE);

  const [expenses, setExpenses] = useState(expense);

  // To get data (FETCH API)

  useEffect(()=>{
    
      fetch('#').then(
        response =>{
          return response.json();
        }
      ).then(
        data =>{
          // console.log(data);
          setExpenses(data);
        }
      );

  },[]);

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