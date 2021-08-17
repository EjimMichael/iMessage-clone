import React, { useState } from 'react';
import './SidebarChat.css';
import { Avatar } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { setChat } from './features/chatSlice';

function Sidebarchat({id, chatName}) {
    const dispatch = useDispatch();
    // const [chatInfo, setChatInfo] = useState([]);

    return (
        <div onClick={() => 
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName,
                })
            )
        } className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>Last message sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default Sidebarchat
