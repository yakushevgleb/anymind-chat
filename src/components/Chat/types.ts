import React from "react";

export interface ChatStateType {
  user: string;
  channel: string;
}

export interface ChatContextType {
  state: ChatStateType;
  dispatch: (value: ActionType) => void;
}

export interface ChatProviderProps {
  children: React.ReactNode
}

export enum Actions {
  UPDATE_USER = "UPDATE_USER",
  UPDATE_CHANNEL = "UPDATE_CHANNEL"
}
export type ActionType = |
  { type: Actions.UPDATE_USER, user: string } |
  { type: Actions.UPDATE_CHANNEL, channel: string }

export interface MessageProps {
  messageId: string;
  text: string;
  datetime: string;
  userId: string;
}
