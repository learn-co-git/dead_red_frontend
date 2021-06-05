import React from "react";
import { updateForm } from '../actions/loginAction'
import { login } from '../actions/currentUser'
import { connect } from "react-redux"

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleName = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) {return}
    this.props.updateForm(this.state)
    this.props.login(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleName(event)} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePassword(event)} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password
  }
}

export default connect(mapStateToProps, { updateForm, login })(LoginForm);
