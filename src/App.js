import React, { Component } from 'react'
import './App.css';
import Movies from './components/Movies'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Movies />
    );
  }
}

export default App;
