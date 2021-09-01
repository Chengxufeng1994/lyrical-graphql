import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { GET_SONG_LISTS } from '../queries/index';

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

const SongCreate = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [addSong, { loading: mutationLoading, error: mutationError }] =
    useMutation(ADD_SONG, {
      refetchQueries: [{ query: GET_SONG_LISTS }],
    });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setTitle(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    addSong({ variables: { title: title } }).then(() => {
      setTitle('');
      history.push('/songs');
    });
  };

  console.log('[Render SongCreate]');
  return (
    <div>
      <h3>Create a New Song</h3>
      <form onSubmit={handleSubmit}>
        <label>Song Title:</label>
        <input onChange={handleChange} value={title} />
      </form>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
      <Link to="/" className="waves-effect waves-light btn-small">
        <i className="large material-icons left">keyboard_backspace</i>Back
      </Link>
    </div>
  );
};

export default SongCreate;
