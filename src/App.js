import React, { useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';

const style = {
  width: "100vw",
  height: "100vh",
  "backgroundColor": "skyblue"
}

const conversations = require('./conversations.json');
console.log(conversations)

function App() {
  const [conversationIndex, setConversation] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      // if (message < messages.length) {
        setConversation(conversationIndex < conversations.length - 1 ? conversationIndex + 1 : 0)
      // }
    }, 3000)
  }, [ conversationIndex ]);

  return (
    <div style={style}>
      <Wrapper conversation={conversations[conversationIndex]} conversationKey={conversationIndex}/>
    </div>
  );
}

export default App;
