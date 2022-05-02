import React from "react";
import clsx from "clsx";
import format from "date-fns/format";
import useStyles from "./styles";
import { MessageProps } from "./types";
import { ChatContext } from "./ChatContext";

const Message: React.FC<MessageProps> = (props) => {
  const classes = useStyles();
  const ctx = React.useContext(ChatContext);

  const time = React.useMemo(() => {
    return format(new Date(props.datetime), 'HH:mm');
  }, [props.datetime])

  return (
    <div 
      className={clsx(classes.message, { 
        [classes.messageRight]: props.userId === ctx?.state.user,
        [classes.messageLeft]: props.userId !== ctx?.state.user
      })}
    >
      <div className={classes.messageAvatar}>
        <img src={`https://angular-test-backend-yc4c5cvnnq-an.a.run.app/${props.userId}.png`} alt="User" />
        <div className={classes.userName}>{props.userId}</div>
      </div>
      <div className={classes.messageText}>{props.text}</div>
      <div className={classes.messageTime}>{time}</div>
    </div>
  )
}

export default Message;
