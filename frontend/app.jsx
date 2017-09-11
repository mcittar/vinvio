import React from 'react';
import AuthForm from './components/auth/auth_form_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';

const App = () => (
  <div>
  	<header>Welcome to Vinvio!</header>
  	<Switch>
	  	<AuthRoute path='/login' component={ AuthForm } />
	  	<AuthRoute path='/signup' component={ AuthForm } />
  	</Switch>
  </div>
);

export default App;
