import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import NavDisplay from "./components/NavDisplay/NavDisplay";
import Error from "./components/Error/Error";
import { Route } from "react-router-dom";
import fetchData from './api'
import logo from './images/potato.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
    };
  }

  componentDidMount() {
    fetchData()
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
        <img src={logo} className="App-logo" alt="logo" />
        <React.Fragment>
          <Route
            exact
            path="/"
            render={() => 
              <>
                <NavDisplay />
                <Movies movies={this.state.movies} />
              </>
            }
          />
          <Route
            exact
            path="/:id"
            render={({ match }) => {
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
