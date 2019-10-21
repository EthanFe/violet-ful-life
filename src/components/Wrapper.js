import React, { useEffect } from 'react';
import MessageContainer from './MessageContainer';


const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center"
  }
}

let previousContent = {message: null, messageKey: null}

function Wrapper({message, messageKey}) {

  // const [existingContent, setContent] = useState(<div>yo gimme some shit to display</div>)
  useEffect(() => {
    previousContent = {message, messageKey}
  }, [message, messageKey])

  const contentChanged = previousContent.message !== null && previousContent.message !== message // fuck it
  // console.log(previousContent)
  // console.log("=>")
  // console.log(content)
  console.log(messageKey)
  console.log(previousContent.messageKey, messageKey)

  if (contentChanged) {
    return (
      <div style={styles.wrapper}>
          <MessageContainer key={previousContent.messageKey} content={previousContent.message} exiting={true}/>
          <MessageContainer key={messageKey} content={message} exiting={false}/>
      </div>
    );
  } else {
    return (
      <div style={styles.wrapper}>
          <MessageContainer key={messageKey} content={message} exiting={false}/>
      </div>
    )
  }
}

export default Wrapper;
