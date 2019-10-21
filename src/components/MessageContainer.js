import React, { useEffect, useState } from 'react';
import MessagesWindow from './MessagesWindow';

const containerStyle = {
  width: "500px",
  height: "700px",
  border: "2px solid #00000040",
  borderRadius: "5%",
  textAlign: "center",
  padding: "0px 5px",
  backgroundColor: "white"
}


const styles = {
  base: {
    // position: "relative",
    transitionProperty: "transform, opacity",
    transitionDuration: "1000ms",
    position: "absolute",
    top: "0px",
    transform: `translateY(140vh) scale(0.7)`,
    opacity: 0,
    // top: "400px",
  },
  exitAnimation: {
    transform: "translateY(-40vh) scale(0.7)",
    // top: "000px",
  },
  entryAnimation: {
    // top: "200px",
    transform: `translateY(10vh) scale(0.7)`,
    opacity: 1,
    // transform: "translate(0px,-200px)"
  }
}

function MessageContainer({content, exiting}) {
  let [ animatorStyles, setStyles ] = useState(styles.base)
  useEffect(() => {
    setTimeout(() => 
      setStyles({...styles.base, ...(!exiting ? styles.entryAnimation : styles.exitAnimation ) })
    , 0)
  }, [ exiting ])

  return (
    <div style={animatorStyles}>
      <div style={containerStyle}>
        {/* {content} */}
        <MessagesWindow conversation={content}/>
      </div>
    </div>
  );
}

export default MessageContainer;
