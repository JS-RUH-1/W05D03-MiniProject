import './App.css';
import Home from './Home';
import Navbar from './Navbar'
import VideoPlayer from './VideoPlayer';
import Search from './Search';
import { useEffect, useState } from 'react';
import {  BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams} from "react-router-dom"

const axios = require('axios');

function App() {
	return (
		<Router>
		<div class="bg-light">
			<Navbar />
				<Switch>
					<Link exact path="/" component={Home} />
					<Link exact path="/search/:searchString" component={Search} />
					<Link exact path="/video/:id" component={VideoPlayer} />

				</Switch>
			</div>
		</Router>
	);
}

export default App;
