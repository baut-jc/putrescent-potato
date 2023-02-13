import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './Error.css'

const Error = (props) => {
  return (
    <div className='error'>
      <p>{props.message}</p>
      {props.homeButton && (
        <Link to="/">
          <button>Home</button>
        </Link>
      )}
    </div>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
