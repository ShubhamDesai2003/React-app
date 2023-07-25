import React from 'react';

import Expences from "./Components/Expenses/Expences";
// import expenses from "./Components/expences.json"

const App = ()=>{

  let expenses = [
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

  return (
    <div>
      <h2>Let's Get Started...</h2>
      <Expences item={expenses}/>
    </div>

  );
}

export default App;