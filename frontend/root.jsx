import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, IndexRoute, hashHistory } from 'react-router-dom';
import App from './app.jsx';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <HashRouter history={ hashHistory }>
          <App />
      </HashRouter>
    </Provider>
  );
};

export default Root;
