import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>{props.name}, {props.age} years old ({props.children})</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
};

export default person;