import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContentProps } from "./types";
import useStyles from "./styles";

const Content: React.FC<ContentProps> = (props) => {
  const classes = useStyles();

  return (
    <Row className={classes.contentRoot}>
      <Col xl={12} lg={12} md={12} sm={12}>
        {props.children}
      </Col>
    </Row>
  )
};

export default Content;
