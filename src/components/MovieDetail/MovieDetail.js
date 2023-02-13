import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieDetail.css";
import fetchData from "../../api";
import cleanData from "../../utilities";
import PropTypes from "prop-types";

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      movieData: {},
    };
  }

  componentDidMount() {
    fetchData(this.props.id).then((data) => {
      const cleanedData = cleanData(data.movie);
      this.setState({ movieData: cleanedData });
    });
  }

  render() {
    return (
      <div
        className="movie-detail"
        style={{
          backgroundImage: `url(${this.state.movieData.backdrop_path})`,
        }}
      >
        <div className="background-gradient">
          <div className='movie-info'>
            <h2>{this.state.movieData.title}</h2>
              <p>{this.state.movieData.tagline}</p>
            <img className="poster" src={this.state.movieData.poster_path} />
            <div className='text-section'>
              <p>{this.state.movieData.runtime}</p>
              <p>Release Date: {this.state.movieData.release_date}</p>
              <p>Budget: {this.state.movieData.budget}</p>
              <p>Revenue: {this.state.movieData.revenue}</p>
              <p>{this.state.movieData.genres}</p>
              <p>{this.state.movieData.overview}</p>
              <Link to="/">
                <button>HOME</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default MovieDetail;

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
};
