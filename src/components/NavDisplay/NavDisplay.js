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
        const topMovies = data.movies.filter(movie => movie.average_rating > 8)
          const backdrops = topMovies.map(movie => movie['backdrop_path'])
          const onTop = this.randomizeDisplay(backdrops)
        this.setState({feature: onTop}, () => {
        })
      })
  }

  render() {
    return (
      <div className='top-display' style={{backgroundImage: `url(${this.state.feature})`}}>
      </div>
    )
  }
}

export default NavDisplay