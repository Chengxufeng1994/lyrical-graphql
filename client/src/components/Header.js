import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
  console.log('[Render Header]');
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Header;
