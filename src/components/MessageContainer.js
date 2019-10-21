import React, { useEffect, useState } from 'react';
import MessagesWindow from './MessagesWindow';

const containerStyle = {
  width: "500px",
  // height: "700px",
  border: "2px solid #00000040",
  borderRadius: "5%",
  textAlign: "center",
  padding: "0px 5px",
  backgroundColor: "white"
}


const styles = {
  base: {
    // position: "relative",
    transitionProperty: "transform, opacity, top",
    transitionDuration: "1000ms",
    position: "relative",
    top: "150%",
    transform: `scale(0.7)`,
    opacity: 0,
    // top: "400px",
  },
  exitAnimation: {
    top: "-50%",
  },
  entryAnimation: {
    top: "0%",
    opacity: 1,
    // transform: "translate(0px,-200px)"
  },

  flexContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "absolute",
    width: "100%"
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
    <div style={styles.flexContainer}>
      <div style={animatorStyles}>
        <div style={containerStyle}>
          {/* {content} */}
          <MessagesWindow conversation={content}/>
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;
