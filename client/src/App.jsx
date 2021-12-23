import React, {useState, useEffect} from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PageTasks from "./PageTasks"
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

import "./css/App.css";

const App = () => {

	return (
		<Router>
			<div className="container">
				<Header/>
				<Route
					path="/"
					exact
					render={() => (<PageTasks/>)}
				/>
				<Route path="/:taskTitle" exact component={TaskDetails} />
			</div>
		</Router>
	);
};

export default App;
