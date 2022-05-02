import React from "react";
import { ChatContext } from "./ChatContext";
import useStyles from "./styles";
import TextareaBlock from "./TextareaBlock";
import MessageList from "./MessageList";

const ChatContainer: React.FC = () => {
  const classes = useStyles();
  const ctx = React.useContext(ChatContext);

  return (
    <div className={classes.chatContainerRoot}>
      <div className={classes.channelTitle}>
        {ctx?.state.channel} Channel
      </div>
      <MessageList />
      <TextareaBlock />
    </div>
  )
}

export default ChatContainer;
