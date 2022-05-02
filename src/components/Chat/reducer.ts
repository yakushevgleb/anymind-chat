import { ChatStateType, ActionType, Actions } from "./types";

export const initialState: ChatStateType = {
  user: "Joyse",
  channel: "General"
}

export const reducer = (state: ChatStateType, action: ActionType): ChatStateType => {
  switch (action.type) {
    case Actions.UPDATE_CHANNEL:
      const { channel } = action;
      return {
        ...state,
        channel
      };
    case Actions.UPDATE_USER:
      const { user } = action;
      return {
        ...state,
        user
      };
    default:
      throw new Error("there is no action type defined")
  }
}
