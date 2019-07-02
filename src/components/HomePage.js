import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import SearchForm from "./SearchBar";
import { clearMessages } from '../store/actions/mail';
import { removeError } from '../store/actions/errors';
import ErrorsDisplay from './ErrorsDisplay';
import MessagesDisplay from './MessagesDisplay';
import history from '../history';

class HomePage extends React.Component{

  componentWillUnmount(){
    this.props.clearMessages();
  }

  render(){
    const { message, errors } = this.props;

    history.listen( () => {
      removeError();
    })

    return(
      <div 
        className="w-100 vh-100 d-flex flex-column justify-content-start align-items-center"
      >
        <div className="pb-5">
        {
          message &&
          <MessagesDisplay message={ message } />
        }
        {
          errors &&
          <ErrorsDisplay errors={ errors } />
        }
        </div>

        <h1 className="mt-5 text-primary ">
          Jiu Jitsu Distilled
        </h1>

        <div className="m-4 w-100 d-flex justify-content-center">
          <SearchForm to="Techniques" go="techs" />
        </div>

        <div className="d-flex w-75 flex-column justify-content-between align-items-center flex-md-row">
          <Link to="/sequences/all">
            <button className="btn btn-secondary m-4 shadow-lg">
              Search for Drill Sequences
            </button>
          </Link>

          <Link to="/techniques/all">
            <button className="btn btn-secondary m-4 shadow-lg">
              Browse All Techniques
            </button>
          </Link>
        </div>

        
      </div>
    );
  }
}

function mapStateToProps( state ){
  let message;

  if( !state.messages || state.messages.length === 0 ) {
    message = null
  } else {
    message = state.messages[0].message
  }

  return({
    message: message,
    errors: state.errors.message
  })
}

export default connect( mapStateToProps, { clearMessages, removeError })( HomePage );