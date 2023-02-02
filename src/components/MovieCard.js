import React from "react";

const MovieCard = ({ movieToDisplay }) => {
  //create a state to display
  //
  
  return (
    <div className='movie-card'>
      <img src={movieToDisplay.poster_path}/>
    </div>
  )
}

export default MovieCard