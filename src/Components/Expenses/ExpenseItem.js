import React from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import Nest from './nest';


const ExpenseItem = (props) =>{

    // const [NewTitle, setNewTitle] = useState("");

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = ()=>{
    //     setTitle(NewTitle);
    // }

    // const changeHandler = (event)=>{
    //     setNewTitle(event.target.value);
    // }

    return (
        <Card className='expense-item'>
            <ExpenseDate date = { new Date(props.date)} />
            <Nest className='expense-item__description'>

                <h2>{ props.title }</h2>
                <div className='expense-item__price'>${ props.amount }</div>

            </Nest>



            {/* <input type='text' value={ NewTitle } onChange={ changeHandler }></input>
            <button onClick={ clickHandler }>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;