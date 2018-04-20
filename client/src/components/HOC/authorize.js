import React, { Component } from "react";
import { connect } from "react-redux";

const ComposedComponent = BaseComponent => {
  class Authorize extends Component {
    componentDidMount() {
      if (!this.props.authenticated) {
        this.props.history.push("/signin");
      }
    }

    render() {
      return <div>{this.props.authenticated ? <BaseComponent /> : null}</div>;
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(Authorize);
};

export default ComposedComponent;
