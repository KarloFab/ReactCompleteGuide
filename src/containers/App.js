import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;

    if(this.state.showPersons){
      persons =
          <Persons 
            persons={this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}/>
    }

    return (
      <div className="App">
          <Cockpit 
            persons={this.state.persons}
            showPersons = {this.state.showPersons}
            clicked={this.togglePersonsHandler}/>
          {persons}
      </div>
    );
  }
}

export default App;
