import { gql } from "@apollo/client";

export const FETCH_MORE_MESSAGES = gql`
  query FetchMoreMessages($channel: String!) {
    fetchMoreMessages(channelId: $channel) {
      messageId
      text
      datetime
      userId
    }
  }
`
