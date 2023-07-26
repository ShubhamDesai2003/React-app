import React, { useState } from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import Nest from './nest';

const ExpenseItem = (props) =>{

    

    const [title, setTitle] = useState(props.title);

    const clickHandler = ()=>{
        setTitle('New Title');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <Nest className='expense-item__description'>

                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </Nest>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;