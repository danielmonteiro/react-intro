import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>{props.name}, {props.age} years old ({props.children})</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
};

export default Radium(person);