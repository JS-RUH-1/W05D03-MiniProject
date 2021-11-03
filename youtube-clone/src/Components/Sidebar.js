import React from 'react';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import "./sidebar.css";
import { Link } from 'react-router-dom';

function Sidebar() {
    return ( 
 <div className="sidebar">
<div className="sidebarRow">
<HomeOutlinedIcon className="sidebarRow__icon"/>
<h2 className="sidebarRow__title" >Home</h2></div>

<div className="sidebarRow">
<WhatshotOutlinedIcon className="sidebarRow__icon"/>
<h2 className="sidebarRow__title" >Trending </h2></div>

<div className="sidebarRow">
<SubscriptionsOutlinedIcon className="sidebarRow__icon"/>
<h2 className="sidebarRow__title">Subscription</h2></div>

<Link to="/watchlater"><div className="sidebarRow">
<WatchLaterIcon className="sidebarRow__icon"/>
<h2 className="sidebarRow__title">Watch Later</h2></div></Link>
</div>
     );
}

export default Sidebar;