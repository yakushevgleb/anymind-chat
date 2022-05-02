import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Sidebar from "./Sidebar";
import ChatContainer from "./ChatContainer";
import useStyles from "./styles";
import { ChatProvider } from "./ChatContext";

const Chat: React.FC = () => {
  const classes = useStyles();

  return (
    <ChatProvider>
      <Card className={classes.card}>
        <Row className={classes.rootRow}>
          <Col className={classes.colLeft} xl={4} lg={4} md={4} sm={3}>
            <Sidebar />
          </Col>
          <Col className={classes.colRight} xl={8} lg={8} md={8} sm={9}>
            <ChatContainer />
          </Col>
        </Row>
      </Card>
    </ChatProvider>
  )
}

export default Chat;
