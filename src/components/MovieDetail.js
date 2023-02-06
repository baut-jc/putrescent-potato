import React, { Component } from 'react'
import './MovieDetail.css'

class MovieDetail extends Component {
  constructor() {
    super()
    this.state = {
      movieData: {}
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({movieData: data.movie})
      })
  }

  render() {
    return(
      <div className='testing' style={{backgroundImage: `url(${this.state.movieData.backdrop_path})`}}>
        <h2>{this.state.movieData.title}</h2>
        <img src={this.state.movieData.poster_path}/>
        <p>{this.state.movieData.release_date}</p>
        <p>{this.state.movieData.runtime}</p>
        <p>{this.state.movieData.genres}</p>
        <p>{this.state.movieData.budget}</p>
        <p>{this.state.movieData.revenue}</p>
        <p>{this.state.movieData.overview}</p>
       </div>
    )
  }

}

export default MovieDetail