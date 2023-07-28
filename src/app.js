import React,  { useState, useEffect } from 'react';

import NewExpense from './Components/NewExpense/NewExpense';

import Expences from "./Components/Expenses/Expences";
import json from "./Components/expences.json";

// For data object
// let DUMY_EXPENSE = [];  


const App = ()=>{

  // const [expenses, setExpenses] = useState(DUMY_EXPENSE);

  const [expenses, setExpenses] = useState(json);


  // To get data (FETCH API)
  // const fetchData = ()=>{

  //   fetch('#GIT').then(
  //     response =>{
  //       return response.json();
  //     }
  //   ).then(
  //     data =>{
  //       // console.log(data);
  //       setExpenses(data);
  //     }
  //   );
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[]);


  // To post data (FETCH API)
  // const addExpenseHandler = (expense)=>{
  //   fetch('https POST',{
  //     method:'POST',
  //     body: JSON.stringify(expense),
  //     headers: {
  //       'content-Type' : 'application/json'
  //     }
  //   }).then(
  //     response =>{
  //       fetchData();
  //     }
  //   );
  // }

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