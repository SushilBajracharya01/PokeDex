import React from 'react';
import './App.scss';
import PokeDex from './components/PokeDex';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PokeDex />
      </div>
    );
  }
}

export default App;
