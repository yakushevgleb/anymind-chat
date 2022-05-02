import { useQuery } from "@apollo/client";
import { FETCH_LATEST_MESSAGES } from "qraphql/queries";
import { LatestMessagesData, LatestMessagesVars } from "qraphql/queries/fetchLatestMessages";
import React from "react";
import { ChatContext } from "./ChatContext";
import Message from "./Message";
import useStyles from "./styles";

const MessageList: React.FC = () => {
  const classes = useStyles();
  const ctx = React.useContext(ChatContext);

  const { data } = useQuery<LatestMessagesData, LatestMessagesVars>(FETCH_LATEST_MESSAGES, {
    variables: {
      channel: ctx?.state.channel || ""
    }
  });

  const messages = React.useMemo(() => {
    if (data?.fetchLatestMessages.length) {
      return [...data.fetchLatestMessages].reverse();
    }
    return [];
  }, [data]);

  return (
    <div className={classes.messageList}>
      <div className={classes.scrollable}>
        {messages?.map((message) => (
          <Message 
            key={message.messageId}
            userId={message.userId}
            messageId={message.messageId}
            text={message.text}
            datetime={message.datetime}
          />
        ))}
      </div>
    </div>
  )
}

export default MessageList;
