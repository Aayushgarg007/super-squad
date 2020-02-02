import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroesList from './HeroesList';
import SquadStat from './SquadStats';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2>SuperSquad</h2>
        <div className='row'>
          <div className='col-md-4'>
            <CharacterList />
          </div>
          <div className='col-md-4'>
            <HeroesList />
          </div>
          <div className='col-md-4'>
            <SquadStat />
          </div>
        </div>
      </div>
    );
  }
}

export default App;