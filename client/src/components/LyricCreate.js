import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { GET_SONG } from '../queries/index';

const ADD_LYRIC_TO_SONG = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

const LyricCreate = (props) => {
  const { songId } = props;
  const [content, setContent] = useState('');
  const [addLyricToSong, { loading: mutationLoading, error: mutationError }] =
    useMutation(ADD_LYRIC_TO_SONG, {
      refetchQueries: [
        {
          query: GET_SONG,
          variables: { id: songId },
        },
      ],
    });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setContent(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    addLyricToSong({ variables: { content: content, songId: songId } }).then(
      () => {
        setContent('');
      }
    );
  };

  console.log('[Render LyricCreate]');
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a Lyric</label>
        <input onChange={handleChange} value={content} />
      </form>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </div>
  );
};

export default LyricCreate;
