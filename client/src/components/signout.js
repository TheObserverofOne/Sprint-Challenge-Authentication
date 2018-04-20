import React from "react";
import { connect } from "react-redux";

import { signout } from "../actions";

class Signout extends React.Component {
	
	componentDidMount() {
		this.props.signout();
	}

	render() {
		return <div>Peace Out!</div>;
	}
}

export default connect(null, { signout })(Signout);
