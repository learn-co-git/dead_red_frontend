import React from "react";
import { logout } from '../actions/currentUser'
import { connect } from "react-redux"

class Logout extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.props.logout}>
        <div>
          <button type="submit">Log Out</button>
        </div>
      </form>
    );
  }
}


export default connect(null, { logout })(Logout);
