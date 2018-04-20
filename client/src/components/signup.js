import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { signup } from "../actions";

class Signup extends React.Component {
  componentDidMount() {}
  handleFormSubmit({ username, password }) {
    this.props.signup(username, password, this.props.history);
  }

  renderAlert() {
    if (this.props.error) {
      return <h3>{this.props.error}</h3>;
    }
    if (this.props.authenticated) {
      return <h3>Sup.</h3>;
    }
    return null;
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <fieldset>
          <label>Username:</label>
          <Field name="username" component="input" type="text" />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name="password" component="input" type="text" />
        </fieldset>
        <fieldset>
          <label>Confirm Password:</label>
          <Field name="ConfirmPassword" component="input" type="text" />
        </fieldset>
        <button action="submit">Log In</button>
        {this.renderAlert()}
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated
  };
};

Signup = connect(mapStateToProps, { signup })(Signup);

export default reduxForm({
  form: "signin",
  fields: ["username", "password", "confirmPassword"]
})(Signup);
