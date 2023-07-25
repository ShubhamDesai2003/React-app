import React from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import Nest from './nest';

const ExpenseItem = (props) =>{

    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <Nest className='expense-item__description'>

                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </Nest>
        </Card>
    );
}

export default ExpenseItem;