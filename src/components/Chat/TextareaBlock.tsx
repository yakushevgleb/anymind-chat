import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useStyles from "./styles";
import { useMutation } from "@apollo/client";
import { POST_MESSAGE } from "qraphql/mutations";
import { ChatContext } from "./ChatContext";
import { FETCH_LATEST_MESSAGES } from "qraphql/queries";

// To accomplish the requirements and preserve messages after reload
// they can be preserved in localStorage and deleted from there after
// successful data fetching.
// Status of success or error can be stored in context

const TextareaBlock: React.FC = () => {
  const classes = useStyles();
  const ctx = React.useContext(ChatContext);
  const [message, setMessage] = React.useState("");

  const [postMessage, { data, error }] = useMutation(POST_MESSAGE, {
    refetchQueries: [FETCH_LATEST_MESSAGES]
  });

  const handleMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = () => {
    postMessage({
      variables: {
        text: message,
        user: ctx?.state.user,
        channel: ctx?.state.channel
      }
    })
  }

  return (
    <div className={classes.textareaBlock}>
      <Form.Control 
        as={"textarea"} 
        rows={3}
        placeholder="Type your message here..." 
        value={message}
        onChange={handleMessageChange}
      />
      <Button 
        variant='info'
        onClick={handleSubmit}
      >
        Send Message <FontAwesomeIcon icon={faPaperPlane} />
      </Button>
    </div>
  )
}

export default TextareaBlock;
