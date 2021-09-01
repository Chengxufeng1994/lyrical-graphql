import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SongLists from '../components/SongList';
import SongCreate from '../components/SongCreate';
import SongDetail from '../components/SongDetail';

const Songs = () => {
  const { path /* url */ } = useRouteMatch();

  console.log('[Render Songs]');
  return (
    <Switch>
      <Route exact path={path}>
        <SongLists />
      </Route>
      <Route path={`${path}/create`}>
        <SongCreate />
      </Route>
      <Route path={`${path}/:songId`}>
        <SongDetail />
      </Route>
    </Switch>
  );
};

export default Songs;
