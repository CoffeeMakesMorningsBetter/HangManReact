import React, { Component } from "react";

class UserInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState({ guess: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="guess"
          type="text"
          value={this.state.guess}
          onChange={this.handleChange}
          maxLength="1"
          minLength="1"
        />
        <input type="submit" value="Make A Guess" />
      </form>
    );
  }
}

export default UserInputForm;
