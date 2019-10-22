import React from 'react';

const styles = {
  titleBarContainer:  {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "font-family": "Poppins",
    fontSize: "24px",
    marginTop: "20px",
    color: "white"
  },
  titleBar: {
    background: "#000000a0",
    padding: "5px 10px",
    boxShadow: "0px 0px 5px 6px #000000a0",
    borderRadius: "10%",
    zIndex: 712
    // width: "fit-content"
  }
}

function TitleBar() {
  return (
    <div style={styles.titleBarContainer}>
      <div style={styles.titleBar}>
        violet.ful.life
      </div>
    </div>
  )
}

export default TitleBar;