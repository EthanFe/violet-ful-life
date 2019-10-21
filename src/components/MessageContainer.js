import React, { useEffect, useState } from 'react';
import MessagesWindow from './MessagesWindow';

const containerStyle = {
  width: "500px",
  // height: "300px",
  border: "2px solid black",
  borderRadius: "5%",
  textAlign: "center",
  padding: "0px 5px"
}


const styles = {
  base: {
    // position: "relative",
    transitionProperty: "transform, opacity",
    transitionDuration: "1000ms",
    position: "absolute",
    top: "0px",
    transform: `translateY(140vh)`,
    opacity: 0,
    // top: "400px",
  },
  exitAnimation: {
    transform: "translateY(-40vh)",
    // top: "000px",
  },
  entryAnimation: {
    // top: "200px",
    transform: `translateY(40vh)`,
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
        <MessagesWindow/>
      </div>
    </div>
  );
}

export default MessageContainer;
