import React, {Component from 'react';

class App extends Component {
  render() {
  return (
    <main className='App'>
    {/* Pass callback function to change state when user enters information */}
     <UserInput />
    {/* Pass data from state with which books are filtered*/}
     <Books />
    </main>
  );
}
}
export default App;