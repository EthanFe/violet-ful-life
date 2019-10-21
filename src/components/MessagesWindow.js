import React from 'react';
import "./messages.css"
import { SENT } from '../MessageAuthorEnum';

function MessagesWindow({conversation}) {
  return (
    <div className="messages-container">
      {
        conversation.map(([message, sender]) => 
          <p className={`messages-p from-${sender === SENT ? "me" : "them"} ${message.toLowerCase().indexOf("omfg") === -1 ? "faded" : ""}`}>{message}</p>
        )
      }
    </div>
    
  );
}

export default MessagesWindow;