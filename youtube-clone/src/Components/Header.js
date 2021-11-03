import React, { useState } from "react";
import "./Header.css";
import SearchPage from "./SearchPage";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import {BrowserRouter as Router , Switch, Route,Link} from "react-router-dom";


function Header() {

  const [inputSearch,setInputSearch] = useState('');
  return (
    // <Router> 

    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link exact to ="/">
        <img
          className="header__logo"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt=""
          width="100"
        /></Link>
      </div>
      <div className="header__input">
        <input
         onChange={e => setInputSearch(e.target.value)} 
         value={inputSearch} 
         placeholder=" Search" 
         type="text" />

        <Link to={`/search/${inputSearch}`} >
        <SearchIcon className="header__inputButton"/>
        </Link>

      </div>

      <div className="header__icon">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
      </div>
    </div>
    // </Router> 

  );
}

export default Header;
