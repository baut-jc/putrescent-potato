import React from "react";
import MovieCard from "../MovieCard";
import { Link } from "react-router-dom";
import "./Movies.css";
import PropTypes from "prop-types";

const Movies = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return (
      <Link className='link' to={`/${movie.id}`} key={movie.id}>
        {/* <MovieCard className='movie' movieToDisplay={movie} /> */}
        <img className="movie" id={movie.id} src={movie.poster_path} />
      </Link>
    );
  });

  return <div className="movies-display">{movieCards}</div>;
};

export default Movies;

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired)
}

