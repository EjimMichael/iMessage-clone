import React from 'react';
import './Sidebar.css';
import { Avatar } from "@material-ui/core";

function Sidebar() {
    return (
      <div className="sidebar">
        <h2>I am the sidebar</h2>
        <div className="sidebar__header">
            <Avatar />
        </div>

        <div className="sidebar__chats">

        </div>        
      </div>
    );
}

export default Sidebar
