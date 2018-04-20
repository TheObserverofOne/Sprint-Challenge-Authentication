import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './App.css';

class App extends Component {

  getLinks() {
    if (this.props.authenticated) {
      return (
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      );
    }
    return [
      <li key={1}>
        <Link to="/signin">Sign In</Link>
      </li>,
      <li key={2}>
        <Link to="/signup">Sign Up</Link>
      </li>
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Dad Jokes</Link>
        <ul>{this.getLinks()}</ul>       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(App);
