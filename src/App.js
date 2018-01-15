import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import ClassBased from './ClassBased';

class App extends Component {

  state = {
    persons: [
      { name: 'Nome 1', age: 10 },
      { name: 'Nome 2', age: 20 },
      { name: 'Nome 3', age: 30 }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 10 },
        { name: 'Nome 2', age: 20 },
        { name: 'Nome 3', age: 30 }
      ]
    });
  }

  onChangeName = (event) => {
    this.setState(
      {
        persons: [
          { name: event.target.value, age: 10 },
          { name: 'Nome 2', age: 20 },
          { name: 'Nome 3', age: 30 }
        ]
      }
    );
  }

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  }

  render() {

    const styleButton = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let extraPerson = null;

    if(this.state.showPerson) {
      extraPerson = (
        <Person
          name="Extra person"
          age="100" />
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.togglePersonHandler}>Toggle Person</button>

        <br />

        <button 
          style={styleButton}
          onClick={() => this.switchNameHandler('Arrow function')}>Switch Name</button>

        {
          this.state.showPerson ?
            <div>
              <Person 
                change={this.onChangeName}
                click={this.switchNameHandler.bind(this, 'Event bind')}
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}>content children</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div>
          : null
        }

        {extraPerson}
        
        <ClassBased prop1="teste" />
      </div>
    );
  }
}

export default App;
