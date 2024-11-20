import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Facebook from './facebook.svg'
import Twitter from './twitter.svg'
import Behance from './behance.svg'
import Linkedin from './linkedin.svg'
import { links, social } from './data.js';

import logo from './logo.svg';

const Navbar = () => {


    const [showLinks, setShowLinks] = useState(false);
    const containerRef = useRef();
    const linksRef = useRef();

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;

        if (showLinks) {
            containerRef.current.style.height = `${linksHeight}px`
        } else {
            containerRef.current.style.height = '0px'
        }
    }, [showLinks])

 
  return (
   
    <>
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="logo"/>
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-container" ref={containerRef}>
                    <ul className="links" ref={linksRef}>
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
                            const {id, url, icon} = socialIcon;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </nav>
    </>
    
  );
};

export default Navbar;
