import React from "react";
import MenuIcone from "@material-ui/icons/Menu";
import SearchIcone from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcone from "@material-ui/icons/Notifications";
import  Avatar  from "@material-ui/core/Avatar";
import YouTubeIcone from '@material-ui/icons/YouTube';
import './Header.css';
import {useState} from 'react';
import {Route, BrowserRouter as Router, Switch ,Link, useHistory} from "react-router-dom";
//es7 snippets 
// npm install @material-ui/icons
// npm install @material-ui/core
//for the icone
function Header(){
    const[inputser,setInputser]=useState("");
    return(
        <div className="header">
            {/* --------------------------------- */}
            <div className="left-h">
            <Link to={"/"} >
            <MenuIcone />
            <YouTubeIcone className="youtube"/>
            </Link>
            </div>
            {/* -------------------------------- */}
            
            <div className="input">
            <input onChange={e =>setInputser(e.target.value)} 
            value={inputser}
             type="text" 
             placeholder="Search"></input>
            <Link to={`/search/${inputser}`} >
            <SearchIcone />
            </Link>
            </div>
            {/* ------------------------------------ */}
            <div className="raghit-h">
            <VideoCallIcon/>
            <AppsIcon />
            <NotificationsIcone />
            <Avatar  src="https://i.pinimg.com/474x/a0/a7/04/a0a704609c09c7c97450386620118ff2.jpg"/>
            </div>
        </div>
    )
}
export default Header