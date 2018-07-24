import React, { Component } from 'react';
import TopSection from './components/header.jsx'
import logo from './logo.svg';
import './App.css';
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
        <TopSection />
      </div>
    );
  }
}

export default App;
