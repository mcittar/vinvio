import React from 'react';
import AuthForm from './components/auth/auth_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
  	<header>Welcome to Vinvio!</header>

  	<Route path='/login' component={ AuthForm } />
  	<Route path='/signup' component={ AuthForm } />

  </div>
);

export default App;
