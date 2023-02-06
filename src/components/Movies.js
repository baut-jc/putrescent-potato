import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import "./Movies.css";

const Movies = ({ movies }) => {
  //array inside params
  const movieCards = movies.map((movie) => {
    return (
      <Link to={`/${movie.id}`} key={movie.id}>
        <MovieCard movieToDisplay={movie} />
      </Link>
    );
  });

  return <div className="movies-display">{movieCards}</div>;
};

export default Movies;
