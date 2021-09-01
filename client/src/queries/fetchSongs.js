import { gql } from '@apollo/client';

const GET_SONG_LISTS = gql`
  query GetSongLists {
    songs {
      id
      title
    }
  }
`;

export default GET_SONG_LISTS;
