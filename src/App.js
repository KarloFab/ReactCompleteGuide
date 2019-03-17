import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28},
      { id: '2', name: 'Karlo', age: 21},
      { id: '3', name: 'Stefani', age: 26 },
    ],
    showPersons: false,
  }

  // switchNameHandler = () => {
  //   //DONT DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({  
  //     persons: [
  //     { name: 'Maximilian', age: 28},
  //     { name: 'Karlo', age: 21},
  //     { name: 'Stefani', age: 26},
  //   ] })
  // }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }

  deletePersonHandler = (index) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(index,1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name}  
              age={person.age}
              click = {() => this.deletePersonHandler(index)}
              key = {person.id}
              changed= {(event) => this.nameChangedHandler(event, person.id)}></Person>
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
