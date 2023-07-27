import React,  { useState, useEffect } from 'react';

import NewExpense from './Components/NewExpense/NewExpense';

import Expences from "./Components/Expenses/Expences";
import expense from "./Components/expences.json";


// let DUMY_EXPENSE = [];  


const App = ()=>{

  // const [expenses, setExpenses] = useState(DUMY_EXPENSE);

  const [expenses, setExpenses] = useState(expense);


  // To get data (FETCH API)
  const fetchData = ()=>{

    fetch('#GIT').then(
      response =>{
        return response.json();
      }
    ).then(
      data =>{
        // console.log(data);
        setExpenses(data);
      }
    );
  }

  useEffect(()=>{
    fetchData();
  },[]);


  // To post data (FETCH API)
  const addExpenseHandler = (expense)=>{
    fetch('https POST',{
      method:'POST',
      body: JSON.stringify(expense),
      headers: {
        'content-Type' : 'application/json'
      }
    }).then(
      response =>{
        fetchData();
      }
    );
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expences item={expenses}/>
    </div>

  );
}

export default App;