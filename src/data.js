import React from 'react';
// import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Facebook from './facebook.svg'
import Twitter from './twitter.svg'
import Behance from './behance.svg'
import Linkedin from './linkedin.svg'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: Facebook,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: Twitter,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: Linkedin,
  },
  {
    id: 4,
    url: 'https://www.behance.net',
    icon: Behance,
  },
];
