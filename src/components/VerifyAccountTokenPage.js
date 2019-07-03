import React from 'react';
import { connect } from 'react-redux';

import LoadSpinner from './LoadSpinner';
import ErrorsDisplay from './ErrorsDisplay';
import MessagesDisplay from './MessagesDisplay';
import { clearMessages } from '../store/actions/mail';
import { removeError } from '../store/actions/errors';
import { verifyAccount  } from "../store/actions/auth";

class VerifyAccountTokenPage extends React.Component {

  componentDidMount(){
    let accountVerificationToken = this.props.match.params.accountVerificationToken; // this token and this page should only be available from links sent in verifyaccount emails

    this.props.verifyAccount( accountVerificationToken ); //verify that token in url actually exists
  }

  componentWillUnmount(){
    this.props.clearMessages();
    this.props.removeError();
  }

  render(){
    const { errors, message } = this.props;

    if( !errors && !message ){
      return(
        <LoadSpinner />
      )
    }

    if( errors ){
      return(
        <ErrorsDisplay errors={ errors } />
      )
    }

    return(
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <div className="container-fluid pb-5 mb-5">
          {
            message &&
            <MessagesDisplay message={ message } />
          }

          <h2>Account Verified</h2>
        </div>
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


export default connect( mapStateToProps, { clearMessages, removeError, verifyAccount })( VerifyAccountTokenPage );