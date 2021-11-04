import React from "react";
import './SidebarRow.css';

function SidebarRow({ Icon,title }){
    return(
        <div className="SidebarRow">
            <Icon className="SidebarRow-icon"></Icon>
            <h4 className="SidebarRow-title">{title}</h4>
        </div>
    );
}
// {`sidebarRow${selected &&"selected"}`}
export default SidebarRow;