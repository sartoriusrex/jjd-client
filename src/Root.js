import React from 'react';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { configureStore } from './store';
import history from './history';
import { setAuthorizationToken, setCurrentUser } from "./store/actions/auth";

const store = configureStore();

if( localStorage.jwtToken ) {
  setAuthorizationToken( localStorage.jwtToken );
  try {
    store.dispatch( setCurrentUser( jwtDecode( localStorage.jwt )) );
  } catch( err ) {
    store.dispatch( setCurrentUser({}));
  }
}

export default props => {
	return (
		<Provider store={ store }>
      <Router history={ history }>
        { props.children }
      </Router>
		</Provider>
	)
}