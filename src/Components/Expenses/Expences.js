import React from 'react';

import "./Expences.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";

const Expences = (props) =>{
  return (
    <Card className="expenses">

      {
        // Tis will run in loop
        props.item.map(
          expense =>(
            <ExpenseItem
            key={ expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
          )
        )
      }

    </Card>
  );
}

export default Expences;