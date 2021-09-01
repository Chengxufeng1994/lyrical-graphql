import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import LyricList from './LyricList';
import LyricCreate from './LyricCreate';
import { GET_SONG } from '../queries/index';

const SongDetail = () => {
  const { songId } = useParams();
  const { loading, error, data } = useQuery(GET_SONG, {
    variables: { id: songId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('[Render SongDetail]');
  const { song } = data;
  return (
    <div>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={songId} />
      <Link to="/songs" className="waves-effect waves-light btn-small">
        <i className="large material-icons left">keyboard_backspace</i>Back
      </Link>
    </div>
  );
};

export default SongDetail;
