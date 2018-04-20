import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { signin } from '../actions';

class Signin extends React.Component {

  handleFormSubmit({ username, password }) {
    this.props.signin(username, password, this.props.history);
  }

  renderAlert() {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label>Username:</label>
          <Field name='username' component='input' type='text' />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name='password' component='input' type='text' />
        </fieldset>
        <button action='submit'>Log In</button>
        {this.renderAlert()}
      </form>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated,
  }
}

Signin = connect(mapStateToProps, { signin })(Signin);

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
})(Signin;