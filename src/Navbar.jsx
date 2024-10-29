import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Facebook from './facebook.svg'
import Twitter from './twitter.svg'
import Behance from './behance.svg'
import Linkedin from './linkedin.svg'
import { links, social } from './data.js';

import logo from './logo.svg';

const Navbar = () => {
 
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className="nav-toggle">
                <FaBars />
            </button>
        </div>
        <div className="links-container show-container">
            <ul className="links">
                {links.map((link) => {
                    const {id, url, text} = link 
                    return (
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        <ul className="social-icons">
                {social.map((socialIcon) => {
                    const {id, url, icon} = socialIcon 
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
