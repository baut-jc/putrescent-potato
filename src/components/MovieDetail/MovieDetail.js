import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MovieDetail.css'
import fetchData from '../../api'

class MovieDetail extends Component {
  constructor() {
    super()
    this.state = {
      movieData: {}
    }
  }

  componentDidMount() {
    fetchData(this.props.id)
    // fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
    //   .then(response => response.json())
      .then(data => {
        this.setState({movieData: data.movie})
      })
  }

  render() {
    return(
      <div className='testing' style={{backgroundImage: `url(${this.state.movieData.backdrop_path})`}}>
        <div>
          <h2>{this.state.movieData.title}</h2>
          <img className='poster' src={this.state.movieData.poster_path}/>
        </div>
        <container>
          <p>{this.state.movieData.release_date}</p>
          <p>{this.state.movieData.runtime}</p>
          <p>{this.state.movieData.genres}</p>
          <p>{this.state.movieData.budget}</p>
          <p>{this.state.movieData.revenue}</p>
          <p>{this.state.movieData.overview}</p>
        </container>
        <Link to='/'>
          <button>Home</button>
        </Link>
       </div>
    )
  }

}

export default MovieDetail