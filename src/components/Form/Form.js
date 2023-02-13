import React, { Component } from "react";
import PropTypes from "prop-types";
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.inputValue !== this.state.inputValue) {
      this.props.updateApp(this.state.inputValue)
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search Movies By Title"
          value={this.state.inputValue}
          onChange={(event) => this.handleChange(event)}
        ></input>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  updateApp: PropTypes.func.isRequired,
};
