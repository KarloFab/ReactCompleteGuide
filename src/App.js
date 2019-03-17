import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Karlo', age: 21},
      { name: 'Stefani', age: 26},
    ]
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

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <button onClick={() => this.switchNameHandler()}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name}  
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Max')}
          changed ={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name}  
          age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
