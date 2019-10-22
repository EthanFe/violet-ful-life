import React, { useEffect } from 'react';
import MessageContainer from './MessageContainer';
import TitleBar from './TitleBar';

const styles = {
  wrapper: {
    height: "100%",
    width: "100%"
  },
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

  return (
    <div style={styles.wrapper}>
      <TitleBar/>
      {contentChanged ? <MessageContainer key={previousContent.conversationKey} content={previousContent.conversation} exiting={true}/> : null}
      <MessageContainer key={conversationKey} content={conversation} exiting={false}/>
    </div>
  )
}

export default Wrapper;
