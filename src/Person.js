import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>{props.name}, {props.age} years old ({props.children})</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
};

export default person;