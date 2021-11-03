import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SerachIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import ".././Style/Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [inputSearch, setinputSearch] = useState();

  return (
    <div className="header">
      <div className="header__topLeft">
        <MenuIcon />
        <Link to={`/`}>
        <img
          className="header__logo"
          src="data:image/png;base64,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"
          alt="logo"
        />
        </Link>
      </div>
      <div className="header__topCenter">
        <input
          onChange={(e) => setinputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SerachIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__topRight">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="User logo"
          src="https://media-exp1.licdn.com/dms/image/C5603AQEgIAmbHoCUIA/profile-displayphoto-shrink_100_100/0/1626620202480?e=1641427200&v=beta&t=IvYwy89hTSEasvqrnrYBgmL3385SjMopnJ-7JaVYALU"
        />
      </div>
    </div>
  );
}

export default Header;
