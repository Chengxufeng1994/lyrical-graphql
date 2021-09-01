import React from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery, useMutation } from '@apollo/client';

import Modal from '../components/Modal';
import { GET_SONG_LISTS } from '../queries/index';

const DELETE_SONG = gql`
  mutation AddSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

const SongLists = () => {
  const { loading, error, data } = useQuery(GET_SONG_LISTS);
  const [deleteSong, { loading: mutationLoading, error: mutationError }] =
    useMutation(DELETE_SONG, {
      refetchQueries: [{ query: GET_SONG_LISTS }],
    });

  const handleDeleteSong = (songId) => {
    deleteSong({ variables: { id: songId } }).then(() => {
      console.log('[Delete song success]');
    });
  };

  const renderSongs = () => {
    const { songs } = data;

    return songs.map(({ id, title }) => (
      <li key={title} className="collection-item">
        <Link to={`/songs/${id}`}>{title}</Link>
        <Modal
          id={id}
          icon="delete"
          modalHeader="Are you sure you want to delete ?"
          modalText={`Song: ${title}`}
          handleConfirm={() => handleDeleteSong(id)}
        />
      </li>
    ));
  };

  console.log('[Render SongLists]');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
      <h3>Please select a song</h3>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/create" className="btn-floating btn-small red right">
        <i className="material-icons">add</i>
      </Link>
    </>
  );
};

export default SongLists;
