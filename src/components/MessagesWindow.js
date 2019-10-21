import React, { useEffect, useState } from 'react';
import "./messages.css"

const styles = {

}

function MessagesWindow() {
  return (
    <div className="messages-container">
      <p className="messages-p from-me">Hey there! What's up</p>
      <p className="messages-p from-them">Checking out iOS7 you know..</p>
      <p className="messages-p from-me">Check out this bubble!</p>
      <p className="messages-p from-them">It's pretty cool!</p>
      <p className="messages-p from-me">Yeah it's pure CSS &amp; HTML</p>
      <p className="messages-p from-them">Wow that's impressive. But what's even more impressive is that this bubble is really high.</p>
    </div>
    
  );
}

export default MessagesWindow;
