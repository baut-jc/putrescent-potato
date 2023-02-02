import React from 'react'
import MovieCard from './MovieCard'
import './Movies.css'

const Movies = ({ movies }) => { //array inside params
  const movieCards = movies.map(movie => {
    return (
      <div>
        <MovieCard movieToDisplay={movie}/>
      </div>
    )
  })

  return (
   <div className='movies-display'>
    {movieCards}
   </div>
  )
}

export default Movies