import React from 'react';
import logo from '../assets/logo.png';
import twitter from '../assets/twitter.png'
import fb from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import linkdin from '../assets/linkedin.png';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className='leftnav-container'>
      <div className='leftnav-logo-container'>
        <img src={logo} alt="loading" width="100px" height="100px"/>
      </div>
      <div className='leftnav-lists'>
        <Link to='/'>HOME</Link>
        <Link to='/pages'>PAGES</Link>
        <Link to='/menu'>MENU</Link>
        <Link to='/events'>EVENTS</Link>
        <Link to='/blog'>BLOG</Link>
        <Link to='/landing'>LANDING</Link>
      </div>
      <div>
        <div className='leftnav-social-media'>
          <img src={twitter} alt="loading" width="30px" height="30px"/>
          <img src={fb} alt="loading" width="30px" height="30px"/>
          <img src={insta} alt="loading" width="30px" height="30px"/>
          <img src={linkdin} alt="loading" width="30px" height="30px"/>
        </div>
        <div className='leftnav-buttons'>
          <button>ORDER<br/>ONLINE</button>
        </div>
      </div>
    </div>
  )
}

export default LeftNav