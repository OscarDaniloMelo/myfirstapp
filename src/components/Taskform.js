import React, { Component } from "react";

export default class Taskform extends Component {
  state = {
    title: "",
    description: ""
  };

  onSubmit = event => {
    event.preventDefault();
  };

  onChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a task"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        <br />
        <textarea
          placeholder="Write a description"
          name="description"
          onChange={this.onChange}
          value={this.state.description}
        />
        <br />
        <input type="submit" />
      </form>
    );
  }
}
