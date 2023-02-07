import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Error from "./components/Error/Error";
import { Route } from "react-router-dom";
import fetchData from './api'
import logo from './images/potato.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      feature: '', 
      error: '',
    };
  }

  componentDidMount() {
    // fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    //   .then((response) => {
    //     console.log(response)
    //     if(!response.ok) {
    //       throw new Error(`${response.status}: ${response.statusText}`)
    //     }
    //     return response.json()
    //   })
  fetchData()
    .then((data) => {
      console.log(data);
      this.setState({ movies: data.movies });
      this.displayTopMovies(data.movies)
    })
    .catch(error => {
      console.log('error message', error)
      this.setState({error: error.message})
    });
  }

  randomizeDisplay(array) {
    const randomID = Math.floor(Math.random() * array.length)
    return array[randomID]
  }

  //single movie to display with top rating
  displayTopMovies(movies) {
    const topMovies = movies.filter(movie => movie.average_rating > 8)
    const backdrops = topMovies.map(movie => movie['backdrop_path'])
    console.log('backDrops', backdrops)
    const onTop = this.randomizeDisplay(backdrops)
    console.log('classtime Soon', onTop)
    this.setState({feature: onTop})
  }

  render() {
    return (
      <main className="App">
        <header className='top-display' style={{backgroundImage: `url(${this.state.feature})`}}>
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <React.Fragment>
          <Route
            exact
            path="/"
            render={() => {
              console.log('showing main page')
              return <Movies movies={this.state.movies} />;
            }}
          />
          <Route
          
            path="/:id"
            render={({ match }) => {
              console.log(match);
              const movieToDisplay = this.state.movies.find(
                (movie) => movie.id === +match.params.id
              );
              if(!movieToDisplay) {
                return <Error message={'404 Movie Not Found'}/>
              }
              return <MovieDetail id={movieToDisplay.id} />;
            }}
          />
        </React.Fragment>
      </main>
    );
  }
}

export default App;
