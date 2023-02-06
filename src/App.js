import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import Error from "./components/Error";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
    };
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        console.log(response)
        if(!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log(data);
        this.setState({ movies: data.movies });
      })
      .catch(error => {
        console.log('error message', error)
        this.setState({error: error.message})
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
