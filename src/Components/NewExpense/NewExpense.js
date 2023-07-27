import React from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props)=>{
    
    const saveExpenseDataHandler = (enteredExpenseData)=>{

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // To send data to App.js
        props.onAddExpense(expenseData);

    //   console.log(expenseData);
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDataHandler = {saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;