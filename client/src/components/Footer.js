import React from 'react';

const Footer = (props) => {
  console.log('[Render Footer]');
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l4 s12">
            <h5 className="white-text">Social</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Payment Options</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Footer Menu</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2021 Copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
