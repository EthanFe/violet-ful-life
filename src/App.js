import React, { useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';

const style = {
  width: "100vw",
  height: "100vh",
  "backgroundColor": "skyblue"
}

const messages = [
  "wasup",
  "josh",
  "so i heard you like",
  "janky css",
  "animations"
]

function App() {
  const [message, setMessage] = useState(0)
  useEffect(() => {
    // setTimeout(() => {
    //   // if (message < messages.length) {
    //     setMessage(message < messages.length - 1 ? message + 1 : 0)
    //   // }
    // }, 1500)
  }, [ message ]);

  return (
    <div style={style}>
      <Wrapper message={messages[message]} messageKey={message}/>
    </div>
  );
}

export default App;
