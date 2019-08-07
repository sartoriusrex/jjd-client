import React from 'react';
import { connect } from 'react-redux';

import IndexSearchBar from '../components/IndexSearchBar';
import ListTabNav from "../components/ListTabNav";
import SequenceList from "../components/sequences/SequenceList";
import ErrorsDisplay from '../components/ErrorsDisplay';
import MessagesDisplay from '../components/MessagesDisplay';
import { clearMessages } from '../store/actions/mail';
import { removeError } from '../store/actions/errors';


class SequenceIndex extends React.Component {
  componentWillUnmount(){
    this.props.clearMessages();
    this.props.removeError();
  }
  
  render(){
    const { errors, message, search } = this.props;

    return(
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        { 
          errors &&
          <ErrorsDisplay errors={ errors } />
        }
        {
          message &&
          <MessagesDisplay message={ message } />
        }

        <IndexSearchBar
          searchTo="Sequences"
          createTo="Sequence" 
          classStyle="btn btn-info shadow-lg mb-3"
        />
        <ListTabNav to="Sequence" />
        <SequenceList search={ search }/>
      </div>
    )
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

export default connect( 
  mapStateToProps, 
  { clearMessages, removeError }
  )( SequenceIndex );