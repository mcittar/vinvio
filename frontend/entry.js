import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
    	const preLoadedState = { session: { currentUser: window.currentUser } };
    	store = configureStore(preLoadedState);
    	delete window.currentUser;
    } else {
    	store = configureStore();
    }
    ReactDOM.render(<Root store={ store } />, root);
});
