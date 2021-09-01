import React, { createContext } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export const LayoutContext = createContext();
const routes = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/songs',
    label: 'Songs',
  },
];

const Layout = (props) => {
  const { children: childrenProps } = props;
  const headerChildren = [];
  const mainChildren = [];
  const footerChildren = [];

  React.Children.forEach(childrenProps, (child) => {
    if (child?.type === Header) {
      headerChildren.push(child);
    } else if (child?.type === Footer) {
      footerChildren.push(child);
    } else {
      mainChildren.push(child);
    }
  });

  console.log('[Render Layout]');
  return (
    <LayoutContext.Provider value={{ logo: 'Lyrical', icon: 'whatshot', routes: routes }}>
      <Header>{headerChildren}</Header>
      {mainChildren}
      <Footer>{footerChildren}</Footer>
    </LayoutContext.Provider>
  );
};

Layout.Header = Header;
Layout.Footer = Footer;

export default Layout;
