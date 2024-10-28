import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
// import { social } from './data';
import logo from './logo.svg';

const Navbar = () => {
 
  return (
    <nav>
      <p>Babe</p>
      <div>{logo}</div>
      <p><FaBars /></p>
      {links.map((link) => {
        const {text} = link
        return text
      })}
    </nav>
  );
};

export default Navbar;
