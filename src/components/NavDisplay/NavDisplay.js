import React, { Component } from 'react'
import './NavDisplay.css'
import fetchData from '../../api.js'

class NavDisplay extends Component {
  constructor() {
    super()
    this.state = {
      feature: ''
    }
  }

  randomizeDisplay(array) {
    const randomID = Math.floor(Math.random() * array.length)
    return array[randomID]
  }

  componentDidMount() {
    fetchData(this.props.backdrop_path)
      .then(data => {
        console.log('data', data)
        const topMovies = data.movies.filter(movie => movie.average_rating > 8)
          const backdrops = topMovies.map(movie => movie['backdrop_path'])
          const onTop = this.randomizeDisplay(backdrops)
        this.setState({feature: onTop}, () => {
          console.log('this.state', this.state)
        })
      })
  }

  render() {
    return (
      <div className='top-display' style={{backgroundImage: `url(${this.state.feature})`}}>
        <nav className='top-display'>
          <a>New Movies</a>
          <a>Top Rated</a>
        </nav>
      </div>
    )
  }
}

export default NavDisplay