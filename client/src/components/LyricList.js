import React, { Fragment } from 'react';
import { gql, useMutation } from '@apollo/client';

const LIKE_LYRIC = gql`
  mutation likeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;

const LyricList = (props) => {
  const { lyrics } = props;
  const [likeLyric, { loading: mutationLoading, error: mutationError }] =
    useMutation(LIKE_LYRIC);

  const handleLike = (lyricId, likes) => {
    console.log('lyricId: ', lyricId);
    console.log('likes: ', likes);
    try {
      likeLyric({
        variables: { id: lyricId },
        optimisticResponse: {
          likeLyric: {
            id: lyricId,
            __typename: 'LyricType',
            likes: likes + 1,
          },
        },
      });
    } catch (error) {
      console.log(error.stack);
      console.log(error.message);
    }
  };

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={() => handleLike(id, likes)}>
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  };

  console.log('[Render LyricList]');
  return (
    <Fragment>
      <ul className="collection">{renderLyrics()}</ul>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </Fragment>
  );
};

export default LyricList;
