import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import "./index.css";

import reducers from './reducers';
import App from "./App";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Signout from "./components/signout";
import Jokes from "./components/jokes";
import Authorize from "./components/HOC/authorize";

import registerServiceWorker from "./registerServiceWorker";

const storeInMiddle = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
	<Provider store={storeInMiddle(reducers)}>
		<Router>
			<div>
				<Route path="/" component={App} />
				<Route path="/signin" component={Signin} />
				<Route path="/signout" component={Authorize(Signout)} />
				<Route path="/signup" component={Signup} />
				<Route path="/jokes" component={Authorize(Jokes)} />
			</div>
		</Router>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
