import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { PageTitleProps } from "./types";

const PageTitle: React.FC<PageTitleProps> = (props) => (
  <Row>
    <Col xl={6} lg={6} md={6} sm={12}>
      {props.children}
    </Col>
  </Row>
);

export default PageTitle;
