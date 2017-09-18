import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, { currentUser.email }!</h2>
    <button className="header-button" onClick={ logout }>Log Out</button>
	</hgroup>
);

const Navbar = ({ currentUser, logout }) => (
  <nav>
    { currentUser ? personalGreeting(currentUser, logout) : sessionLinks() }
  </nav>
);

export default Navbar;