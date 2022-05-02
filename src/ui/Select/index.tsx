import React from "react";
import Form from 'react-bootstrap/Form';
import { SelectProps } from "./types";

const Select: React.FC<SelectProps> = (props) => {
  return (
    <Form.Select value={props.value} onChange={props.onChange}>
      {props.options.map((optionItem) => (
        <option key={optionItem.id} value={optionItem.id}>{optionItem.value}</option>
      ))}
    </Form.Select>
  )
}

export default React.memo(Select);
