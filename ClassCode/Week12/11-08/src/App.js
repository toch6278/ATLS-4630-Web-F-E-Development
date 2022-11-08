import logo from './logo.svg';
import './App.css';
//make a class component 
import React from 'react';
import Welcome from './welcome';

class App extends React.Component() {
  render() {
    return (
      //how you can compose different components at the same time
      <div>
        <Welcome name = "Peter"/>
        <Welcome name = "Class" />
      </div>
        
    );
  }
}

export default App;
