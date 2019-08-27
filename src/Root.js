import React from 'react';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { configureStore } from './store';
import history from './history';
import { setAuthorizationToken, setCurrentUser } from "./store/actions/auth";


export default ({ children, initialState = {} }) => {
  const store = configureStore( initialState );

  if( localStorage.jwtToken ) {
    setAuthorizationToken( localStorage.jwtToken );
    try {
      store.dispatch( setCurrentUser( jwtDecode( localStorage.jwt )) );
    } catch( err ) {
      store.dispatch( setCurrentUser({}) );
    }
  }

	return (
		<Provider store={ store }>
      <Router history={ history }>
        { children }
      </Router>
		</Provider>
	)
}