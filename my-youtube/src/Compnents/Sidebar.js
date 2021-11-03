import React from "react";
import "../Style/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SidebarRow from "./SidebarRow";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <hr />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
    </div>
  );
}

export default Sidebar;
