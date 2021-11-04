import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from "@material-ui/icons/Home";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import {Route, BrowserRouter as Router, Switch ,Link, useHistory} from "react-router-dom";

//you need to add the rest icon
function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow  Icon={HomeIcon} title="Home"/>
            <SidebarRow  Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>   
            <hr />
            <SidebarRow  Icon={HistoryIcon} title="History"/>
            <SidebarRow  Icon={OndemandVideoIcon} title="OndemandVideo"/>
            <div>
             <Link to={"/watchlater"}>
            <SidebarRow  Icon={WatchLaterIcon} title="WatchLater"/>
            </Link >
            </div>
            <SidebarRow  Icon={ThumbUpOutlinedIcon} title="ThumbUpOutlined"/>
            <SidebarRow  Icon={ExpandLessOutlinedIcon} title="ExpandLessOutlined"/>
            <hr />        
        </div>
    );
}

export default Sidebar;