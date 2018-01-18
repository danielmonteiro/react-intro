import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person';
import ClassBased from './ClassBased';

class App extends Component {

  state = {
    persons: [
      { id: 'asd123', name: 'Nome 1', age: 10 },
      { id: 'asddsf123', name: 'Nome 2', age: 20 },
      { id: 'dfgdfg123', name: 'Nome 3', age: 30 }
    ],
    showPerson: false
  }

  onChangeNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

  }

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;
    let btnClass = '';

    if(this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                change={(event) => this.onChangeNameHandler(event, person.id)}
                name={person.name}
                age={person.age}
                id={person.id}
                key={person.id} />
            })
          }
        </div>
      );

      btnClass = classes.Red;

    }

    const assignedClasses = ['App-title'];
    if(this.state.persons.length <= 1){
      assignedClasses.push('red');
    }else if(this.state.persons.length <= 2){
      assignedClasses.push('orange');
    }

    return (
      <div className={classes.App}>
        <header className={classes["App-header"]}>
          <img src={logo} className={classes["App-logo"]} alt="logo" />
          <h1 className={assignedClasses.join(' ')}>Welcome to React</h1>
        </header>

        <button 
          className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Person</button>

        <br />

        {persons}
        
        <ClassBased prop1="teste" />
      </div>
    );
  }
}

export default App;
