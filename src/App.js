import React, { useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';
import { SENT, RECEIVED } from './MessageAuthorEnum';

const style = {
  width: "100vw",
  height: "100vh",
  "backgroundColor": "skyblue"
}


const conversations = require('./conversations.json');
console.log(conversations)

// const conversations = [
//   [
//     ["wasup", SENT],
//     ["josh", SENT],
//     ["so i heard you like", RECEIVED],
//     ["janky css", RECEIVED],
//     ["animations", SENT]
//   ],
//   [
//     ["hi", SENT],
//     ["im another", RECEIVED],
//     ["conversation", SENT],
//     ["wooooo", RECEIVED],
//     ["fun times", SENT]
//   ],
// ]

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
