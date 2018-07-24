import React, { Component } from 'react';
import Body from './components/body.jsx'
import logo from './logo.svg';
import './styles/App.css';
import twitter from './assets/icons/twitter-dood.jpeg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Twitter Content Labs
        </header>
        <img className='icon'
            src ={twitter} alt ='' />
        <Body />
      </div>
    );
  }
}

export default App;
