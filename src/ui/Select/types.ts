import { FormSelectProps } from "react-bootstrap";

export interface OptionType {
  id: | string | number;
  value: | string | number;
}

export interface SelectProps extends FormSelectProps {
  options: OptionType[]
}
