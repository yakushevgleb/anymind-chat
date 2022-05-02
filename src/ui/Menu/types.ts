export type ValueType = {
  id: | string | number;
  value: | string | number;
}

export interface MenuProps {
  value?: string | number | null;
  onChange: (value: ValueType) => void;
  options: ValueType[]
}
