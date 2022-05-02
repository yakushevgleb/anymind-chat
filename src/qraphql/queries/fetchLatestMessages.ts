import { gql } from "@apollo/client";

export const FETCH_LATEST_MESSAGES = gql`
  query FetchLatestMessages($channel: String!) {
    fetchLatestMessages(channelId: $channel) {
      messageId
      text
      datetime
      userId
    }
  }
`
export interface MessageType {
  messageId: string;
  text: string;
  datetime: string;
  userId: string;
}
export interface LatestMessagesData {
  fetchLatestMessages: MessageType[] 
}

export interface LatestMessagesVars {
  channel: string;
}
