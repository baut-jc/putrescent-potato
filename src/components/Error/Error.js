import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Error = (prop) => {
  return (
    <div>
      <p>{prop.message}</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Error

Error.propTypes = {
  message: PropTypes.string.isRequired
}