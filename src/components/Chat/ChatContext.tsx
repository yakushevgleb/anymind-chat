import React from "react";
import { initialState, reducer } from "./reducer";
import { ChatContextType, ChatProviderProps } from "./types";

export const ChatContext = React.createContext<ChatContextType | null>(null);

export const ChatProvider: React.FC<ChatProviderProps> = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const contextValue: ChatContextType = {
    state,
    dispatch
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {props.children}
    </ChatContext.Provider>
  )
}
