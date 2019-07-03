import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ErrorsDisplay from './ErrorsDisplay';
import MessagesDisplay from './MessagesDisplay';
import { clearMessages } from '../store/actions/mail';

class ManageAccountPage extends React.Component {

  componentWillUnmount(){
    this.props.clearMessages();
  }

  render() {
    const { userid } = this.props.match.params;
    const { message, errors, user } = this.props;

    return(
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <div className="container-fluid d-flex flex-column align-items-center justify-content-start">

          {
            message &&
            <MessagesDisplay message={ message } />
          }
          {
            errors &&
            <ErrorsDisplay errors={ errors } />
          }

          <h2 className="pt-5 pb-5">Manage Account</h2>

          <div className="d-flex flex-column justify-content-start align-items-center w-75 pb-2">
            <div>
              <strong>Username: </strong> {` ${ user.username }` }
            </div>
            <Link 
              to={`/users/${ userid }/update-username`}
              className="btn btn-primary shadow-lg m-3"
            >
              Change Username
            </Link>
          </div>
          
          <div className="d-flex flex-column justify-content-start align-items-center w-75 pb-2">
            <div>
              <strong>E-mail: </strong> {` ${ user.email }` }
            </div>
            <Link 
              to={`/users/${ userid }/update-email`}
              className="btn btn-primary shadow-lg m-3"
            >
              Change e-mail
            </Link>
          </div>

          <Link 
            to={`/users/${ userid }/update-password`}
            className="btn btn-primary shadow-lg m-3"
          >
            Change password
          </Link>
          
          <Link 
            to={`/users/${ userid }/delete-account`}
            className="btn btn-danger shadow-lg m-3"
          >
            Delete Account
          </Link>
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
    errors: state.errors.message,
    user: state.currentUser.user
  })
}

export default connect( mapStateToProps, { clearMessages } )( ManageAccountPage );