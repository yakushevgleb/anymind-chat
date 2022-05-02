import React from "react";
import Menu from "ui/Menu";
import { ValueType } from "ui/Menu/types";
import Select from "ui/Select";
import { ChatContext } from "./ChatContext";
import useStyles from "./styles";
import { Actions } from "./types";

const userOptions = [
  {
    id: "Joyse",
    value: "Joyse"
  },
  {
    id: "Russell",
    value: "Russell"
  },
  {
    id: "Sam",
    value: "Sam"
  }
];

const channelOptions = [
  {
    id: "General",
    value: "General Channel"
  },
  {
    id: "LGTM",
    value: "LGTM Channel"
  },
  {
    id: "Technology",
    value: "Technology Channel"
  },
]

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const ctx = React.useContext(ChatContext);

  const handleUserChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => ctx?.dispatch({ type: Actions.UPDATE_USER, user: e.target.value });
  const handleChannelChange = (value: ValueType) => ctx?.dispatch({ type: Actions.UPDATE_CHANNEL, channel: value.id as string });

  return (
    <div className={classes.sidebarRoot}>
      <div className={classes.userBlock}>
        <p>1. Choose your user</p>
        <Select options={userOptions} value={ctx?.state.user} onChange={handleUserChange} />
      </div>
      <p>2. Choose your Channel</p>
      <Menu 
        value={ctx?.state.channel} 
        onChange={handleChannelChange}
        options={channelOptions}
      />
    </div>
  )
}

export default Sidebar;
