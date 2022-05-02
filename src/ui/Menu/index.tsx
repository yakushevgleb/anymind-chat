import React from "react";
import clsx from "clsx";
import useStyles from "./styles";
import { MenuProps } from "./types";

const Menu: React.FC<MenuProps> = (props) => {
  const classes = useStyles();

  return (
    <ul className={classes.menuRoot}>
      {props.options.map((optionItem) => (
        <li 
          key={optionItem.id}
          className={clsx(classes.menuItem, {
            [classes.active]: optionItem.id === props.value
          })}
          onClick={() => props.onChange(optionItem)}
        >
          {optionItem.value}
        </li>
      ))}
    </ul>
  )
}

export default React.memo(Menu);
