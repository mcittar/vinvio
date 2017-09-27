import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="session-links">
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign up</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="session-links">
    <button className="header-button" onClick={ logout }>Log Out</button>
	</hgroup>
);

const Navbar = ({ currentUser, logout }) => { 
  return(
    <nav className='navbar'>
      { currentUser ? personalGreeting(currentUser, logout) : sessionLinks() }
    </nav>
  )
};

export default Navbar;