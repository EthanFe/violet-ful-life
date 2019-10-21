import React, { useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';

const style = {
  width: "100vw",
  height: "100vh",
  "backgroundColor": "skyblue"
}

const conversations = require('./conversations.json');
let timeout = null;

function App() {
  const [conversationIndex, setConversation] = useState(0)
  useEffect(() => {
    timeout = setTimeout(() => {
      // if (message < messages.length) {
        setConversation(conversationIndex < conversations.length - 1 ? conversationIndex + 1 : 0)
      // }
    }, 8000)
  }, [ conversationIndex ]);

  const cycleMessage = () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    setConversation(conversationIndex < conversations.length - 1 ? conversationIndex + 1 : 0)
  }

  return (
    <div style={style} onClick={cycleMessage}>
      <Wrapper conversation={conversations[conversationIndex]} conversationKey={conversationIndex}/>
    </div>
  );
}

export default App;
