import React, { useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';

const style = {
  width: "100vw",
  height: "100vh",
  "backgroundColor": "skyblue"
}

const pickRandom = array => array[Math.floor(Math.random() * array.length)]

const conversations = require('./conversations.json');
let seenConversations = {}
const initialConversation = pickRandom(Object.keys(conversations))
seenConversations[initialConversation] = true

let timeout = null;

function App() {
  const [conversationIndex, setConversation] = useState(0)
  useEffect(() => {
    timeout = setTimeout(() => {
        cycleMessage()
    }, 8000)
  }, [ conversationIndex ]);
  
  const cycleMessage = () => {
    let unseenConversations = Object.keys(conversations).filter(index => !seenConversations[index])
    if (unseenConversations.length === 0) {
      seenConversations = {}
      unseenConversations = Object.keys(conversations).filter(index => !seenConversations[index]) // this is jank and i choose to not care
    }
    const nextConversation = pickRandom(unseenConversations)
    seenConversations[nextConversation] = true
    setConversation(nextConversation)
  }

  const activelyCycleMessage = () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    cycleMessage()
  }

  return (
    <div style={style} onClick={activelyCycleMessage}>
      <Wrapper conversation={conversations[conversationIndex]} conversationKey={conversationIndex}/>
    </div>
  );
}

export default App;
