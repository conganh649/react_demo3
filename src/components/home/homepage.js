import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      username: "",
      password: "",
    };
  }

  handleFormChange = (event, type) => {
    type === "Username"
      ? this.setState({ username: event.target.value })
      : this.setState({ password: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
    this.state.username === "abcde" && this.state.password === "12345"
      ? this.setState({ isLogged: true, username: "", password: "" })
      : console.log("Login failed, please try again");
  };

  getOut = (event) => {
    event.preventDefault();
    this.setState({
      isLogged: false,
    });
  };
  render() {
    return this.state.isLogged ? (
      <div>
        <button onClick={this.getOut}>Get out</button>
      </div>
    ) : (
      <div>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.handleFormChange(e, "Username")}
          ></input>
          <br></br>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.handleFormChange(e, "Password")}
          ></input>
          <br></br>
          <br></br>
          <button onClick={this.submitForm}>Submit</button>
        </form>
      </div>
    );
  }
}

export default HomePage;
