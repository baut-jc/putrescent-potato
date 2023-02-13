import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import NavDisplay from "./components/NavDisplay/NavDisplay";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import { Route } from "react-router-dom";
import fetchData from "./api";
import logo from "./images/potato.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      filterComparison: "",
      error: "",
    };
  }

  filterMovies() {
    const filteredMovies = this.state.movies.filter((movie) =>
      movie.title
        .toLowerCase()
        .includes(this.state.filterComparison.toLowerCase())
    );
    this.setState({ filteredMovies: filteredMovies });
  }

  updateFilterComparison = (value) => {
    this.setState({ filterComparison: value });
  };

  componentDidMount() {
    fetchData()
      .then((data) => {
        this.setState({ movies: data.movies });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.filterComparison !== this.state.filterComparison ||
      prevState.movies !== this.state.movies
    ) {
      this.filterMovies();
    }
  }

  findMovie(match) {
    const movieToDisplay = this.state.movies.find(
      (movie) => movie.id === +match.params.id
    );
    if (!movieToDisplay) {
      return (
        <Error homeButton={true} message={"404 Movie Not Found"} />
      );
    }
    return <MovieDetail id={movieToDisplay.id} />;
  }

  render() {
    return (
      <main className="App">
        <nav className="nav">
          <img src={logo} className="App-logo" alt="logo" />
          <Form updateApp={this.updateFilterComparison} />
        </nav>
        {this.state.error && <Error message={this.state.error} />}
        {!this.state.error && (
          <React.Fragment>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <NavDisplay movies={this.state.movies} />
                  <Movies movies={this.state.filteredMovies} />
                </>
              )}
            />
            <Route
              path="/:id"
              render={({ match }) => {
                return this.findMovie(match)
              }}
            />
          </React.Fragment>
        )}
      </main>
    );
  }
}

export default App;


