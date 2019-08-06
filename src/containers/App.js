import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { Router } from "react-router-dom";
import jwtDecode from "jwt-decode";

import Navbar from "./Navbar";
import Main from "./Main";
import ShareItem from "../components/ShareItem";
import SequenceBuilder from "../components/sequences/SequenceBuilder";
import Footer from "./Footer";
import history from '../history';
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";

const store = configureStore();

if( localStorage.jwtToken ) {
  setAuthorizationToken( localStorage.jwtToken );
  try {
    store.dispatch( setCurrentUser( jwtDecode( localStorage.jwt )) );
  } catch( err ) {
    store.dispatch( setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={ store }>
    <Router history={history}>
      <div>
        <Navbar />
        <div className="pt-5">
          <Main />
          <ShareItem />
          <SequenceBuilder />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
)

export default App;
