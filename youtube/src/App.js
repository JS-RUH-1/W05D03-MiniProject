import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import {Routes, Route } from "react-router-dom"

const axios = require('axios');

function App() {
	return (
		<div class="bg-light">
			<Navbar />
			<Routes>
        <Route path="/" element={<Home />} />
      		</Routes>
		</div>
	);
}

export default App;
