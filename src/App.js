import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '1'
    }
  }

  handleClick = (newSelection) => {
    this.setState({
      selected: newSelection
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            selected={this.state.selected}
            handleClick={this.handleClick}
          />
          <Circles
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;