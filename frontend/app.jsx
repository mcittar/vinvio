import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import AuthForm from './components/auth/auth_form_container';
import Navbar from './components/navbar/navbar_container';

const App = () => (
  <div>
  
  	<div>
	  	<Navbar />
  	</div>

  	<Switch>
	  	<AuthRoute path='/login' component={ AuthForm } />
	  	<AuthRoute path='/signup' component={ AuthForm } />
  	</Switch>
  </div>
);

export default App;
