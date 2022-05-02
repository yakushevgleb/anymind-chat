import { gql } from "@apollo/client";

export const POST_MESSAGE = gql`
  mutation PostMessage($channel: String!, $text: String!, $user: String!) {
    postMessage(channelId: $channel, text: $text, userId: $user) {
      text,
      datetime,
      userId
    }
  }
`
