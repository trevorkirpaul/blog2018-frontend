import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <span className="Header_Logo">
          blog
          <span className="Header_Logo_Bold">QL</span>
        </span>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span>Posts</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
