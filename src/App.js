import React, { Component } from 'react';
import Books from './Books/Books'
import UserInput from './UserInput/UserInput'
//create state
//call API to update state of which books are selected

class App extends Component {
  render() {
    return (
      <main className="App">
        <UserInput />

        <Books />
      </main>
    );
  }
}
export default App;
