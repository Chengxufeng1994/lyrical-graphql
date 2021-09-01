import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import App from './App';
import Home from './pages/Home';
import Songs from './pages/Songs';
import reportWebVitals from './reportWebVitals';

import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: (o) => o.id,
  }),
  link,
});

const root = document.getElementById('root');

const Root = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Router>
          <App>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/songs">
                <Songs />
              </Route>
            </Switch>
          </App>
        </Router>
      </ApolloProvider>
    </React.StrictMode>
  );
};

render(<Root />, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
