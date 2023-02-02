import React, { Component } from 'react'
import './App.css';
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }
  
  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({movies: data.movies})
    })
  }

  render() {
    return (
      <main className='App'>
        <h1>Petruscent P🥔tato</h1>
        {/* <Movies movies={this.state.movies}/> */}
        <MovieDetail id={436270}/>
      </main>
    );
  }
}

export default App;
