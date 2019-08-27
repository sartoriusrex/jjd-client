import React from 'react';
import Root from 'Root';

import Navbar from "./Navbar";
import Main from "./Main";
import SequenceBuilder from "../components/sequences/SequenceBuilder";
import Footer from "./Footer";


const App = () => (
  <Root >
    <div>
      <Navbar />
      <div className="pt-5">
        <Main />
        <SequenceBuilder />
      </div>
      <Footer />
    </div>
  </Root >
)

export default App;
