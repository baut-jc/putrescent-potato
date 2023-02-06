import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import "./Movies.css";

const Movies = ({ movies }) => {
  //array inside params
  const movieCards = movies.map((movie) => {
    return (
      <Link className='link' to={`/${movie.id}`} key={movie.id}>
        {/* <MovieCard className='movie' movieToDisplay={movie} /> */}
        <img className="movie" src={movie.poster_path} />
      </Link>
    );
  });

  return <div className="movies-display">{movieCards}</div>;
};

export default Movies;
