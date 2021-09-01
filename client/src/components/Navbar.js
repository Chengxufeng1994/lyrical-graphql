import React, { Fragment, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

import { LayoutContext } from './Layout/Layout';

const Navbar = (props) => {
  const { logo, icon, routes } = useContext(LayoutContext);
  const sidenavRef = useRef(null);

  useEffect(() => {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true,
    };

    M.Sidenav.init(sidenavRef.current, options);
    M.Sidenav.getInstance(sidenavRef.current);
  }, []);

  const renderRoutes = () => {
    return routes.map((route) => {
      const { to, label, ...resRoute } = route;

      return (
        <li key={label}>
          <Link to={to} {...resRoute}>
            {label}
          </Link>
        </li>
      );
    });
  };

  console.log('[Render Navbar]');
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <i className="material-icons">{icon}</i>
            {logo}
          </Link>
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {renderRoutes()}
          </ul>
        </div>
      </nav>

      <ul id="mobile-demo" className="sidenav" ref={sidenavRef}>
        {renderRoutes()}
      </ul>
    </Fragment>
  );
};

export default Navbar;
