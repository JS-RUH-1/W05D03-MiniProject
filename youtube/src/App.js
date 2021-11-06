import React from 'react'
import './App.css';
import Home from './Home';
import Navbar from './Navbar'
import VideoPlayer from './VideoPlayer';
import Search from './Search';
import {  BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import Watchlist from './Watchlist';

const axios = require('axios');

function App() {
	const state = useSelector((state) => {
		return {
            darkMode: state.darkmode.darkmode,

		};
	});
	return (
		<Router>
		<div class={`container-bg-${state.darkMode ? 'dark' : 'light' }`}>
			<Navbar />
				<Switch>
					<Link exact path="/" component={Home} />
					<Link exact path="/search/:searchString" component={Search} />
					<Link exact path="/video/:id" component={VideoPlayer} />
					<Link exact path="/watchlist" component={Watchlist} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
