import './App.css';
import Home from './Home';
import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import {Route,Link} from "react-router-dom"

const axios = require('axios');

function App() {
	return (
		<div class="bg-light">
			<Navbar />
			<Route>
				<Link exact path="/" component={Home}/>
			</Route>
		</div>
	);
}

export default App;
