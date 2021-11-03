import React from "react";
import "../Style/Sidebar.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SidebarRow from "./SidebarRow";
function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/"}>
        <SidebarRow Icon={HomeIcon} title="Home" />
      </Link>
      <hr />
      <Link to={"/watchlater"}>
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      </Link>
    </div>
  );
}

export default Sidebar;
