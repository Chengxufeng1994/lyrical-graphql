import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header';
import Footer from './components/Footer';

function App(props) {
  const { children } = props;

  console.log('[Render App]');
  return (
    <Layout>
      <Layout.Header>
        <Header/>
      </Layout.Header>
      <main className="container">{children}</main>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default App;
