import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: data.movies });
      });
  }

  render() {
    return (
      <main className="App">
        <h1>Petruscent P🥔tato</h1>
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
              return <MovieDetail id={movieToDisplay.id} />;
            }}
          />
        </React.Fragment>
      </main>
    );
  }
}

export default App;
