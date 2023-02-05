import React from "react";
import MovieCard from "./MovieCard";
import { NavLink } from "react-router-dom";
import "./Movies.css";

const Movies = ({ movies }) => {
  //array inside params
  const movieCards = movies.map((movie) => {
    return (
      <NavLink to={`/${movie.id}`} key={movie.id}>
        <MovieCard movieToDisplay={movie} />
      </NavLink>
    );
  });

  return <div className="movies-display">{movieCards}</div>;
};

export default Movies;
