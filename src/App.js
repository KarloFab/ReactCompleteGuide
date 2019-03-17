import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Karlo', age: 21},
      { name: 'Stefani', age: 26},
    ],
    showPersons: false,
  }

  switchNameHandler = () => {
    //DONT DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({  
      persons: [
      { name: 'Maximilian', age: 28},
      { name: 'Karlo', age: 21},
      { name: 'Stefani', age: 26},
    ] })
  }

  nameChangedHandler = (event) =>{
    this.setState({  
      persons: [
      { name: 'Maximilian', age: 28},
      { name: event.target.value, age: 21},
      { name: 'Stefani', age: 26},
      ]}
    )
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}></Person>
          })}
        </div>
        )
    }

    return (
      <div className="App">
        <h1>React app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch name</button>
          {persons}
      </div>
    );
  }
}

export default App;
