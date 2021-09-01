import { gql } from '@apollo/client';

const GET_SONG = gql`
  query GetSong($id: ID!) {
    song(id: $id) {
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default GET_SONG;
