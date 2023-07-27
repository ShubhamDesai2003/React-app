import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props)=>{

    const [enteredTitle, setEnteredTitle] = useState(""); 
    const [enteredAmount, setEnteredAmount] = useState(""); 
    const [enteredDate, setEnteredDate] = useState(""); 


    // To store input values
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event)=>{
        // To stop page refreshing
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

            // To send data to NewExpense
        props.onSaveExpenseDataHandler(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new_expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;