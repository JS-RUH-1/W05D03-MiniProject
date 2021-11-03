import React, { useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/Context";

const Navbar = () => {

    const data = useContext(DataContext)

    
    async function getByWord(e) {
        e.preventDefault()
        let input = document.getElementById("input").value
        // console.log(input);
        try {
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=AIzaSyANY5966vhXVzsx71CpSZHZAWmA3YWTXsc`
            const res = await axios.get(url)
            // console.log(res.data.items);
            data.setPopularVedies(res.data.items)
        } catch (err) {
            console.log(err);
        }
    }

    
    return ( 
        <div className="home">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <a href="#" className="navbar-brand">YouTube App</a>
                <form className="d-flex" onSubmit={getByWord}>
                    <input id="input" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;