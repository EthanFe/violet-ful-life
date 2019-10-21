import React, { useEffect } from 'react';
import MessageContainer from './MessageContainer';

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center"
  }
}

let previousContent = {conversation: null, conversationKey: null}

function Wrapper({conversation, conversationKey}) {

  // const [existingContent, setContent] = useState(<div>yo gimme some shit to display</div>)
  useEffect(() => {
    previousContent = {conversation, conversationKey}
  }, [conversation, conversationKey])

  const contentChanged = previousContent.conversation !== null && previousContent.conversation !== conversation // fuck it
  // console.log(previousContent)
  // console.log("=>")
  // console.log(content)
  
  // console.log(conversationKey)
  // console.log(previousContent.conversationKey, conversationKey)

  if (contentChanged) {
    return (
      <div style={styles.wrapper}>
          <MessageContainer key={previousContent.conversationKey} content={previousContent.conversation} exiting={true}/>
          <MessageContainer key={conversationKey} content={conversation} exiting={false}/>
      </div>
    );
  } else {
    return (
      <div style={styles.wrapper}>
          <MessageContainer key={conversationKey} content={conversation} exiting={false}/>
      </div>
    )
  }
}

export default Wrapper;
