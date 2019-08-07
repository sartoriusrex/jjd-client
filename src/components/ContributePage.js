import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { sendFeedback, clearMessages } from '../store/actions/mail';
import { removeError } from '../store/actions/errors';
import ErrorsDisplay from './ErrorsDisplay';
import MessagesDisplay from './MessagesDisplay';

import { validateMessage, renderError } from './FormValidations';
import EmailInput from './EmailInput';
import MessageInput from './MessageInput';

class ContributePage extends React.Component {

  componentWillUnmount(){
    this.props.clearMessages();
  }

  onSubmit = ( formValues ) => {
    const sendFeedback = this.props.sendFeedback;
    const clearMessages = this.props.clearMessages;
    const removeError = this.props.removeError;

    formValues.to = "dmai.developer@gmail.com";
    formValues.subject = "New Message from Contributions"

    clearMessages();
    removeError();
    sendFeedback( formValues );
  }

  render(){
    const { isAuthenticated, message, errors } = this.props;

    return(
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <div
          className="container-fluid d-flex justify-content-start align-items-center flex-column pt-4 pb-4"
        >
          {
            message &&
            <MessagesDisplay message={ message } />
          }
          {
            errors &&
            <ErrorsDisplay errors={ errors } />
          }

          <h2 className="pt-4 pb-4" >
            Contribute to the Website
          </h2>

          <p>
            Use this tool. Create sequences and techniques, share them, and explore the site. If you have suggestions on how to make it better or would like to see features, send a message below. Note: please 
            <Link to="/signup"> sign up </Link>
            to send feedback.
          </p>

          <p>
            JJD is an open-source project, so feel free to explore the 
            <a
              href="https://github.com/sartoriusrex/jjd" target="_blank"
              rel="noopener noreferrer"
            > github
            </a>
            , make a pull request, and mangle the code. <strong>Criticism is welcome.</strong> Constructive criticism is more welcome, but if you wanna bash, then bash away.
          </p>

          <p> Pressure makes Diamonds, right? </p>

          { isAuthenticated ?
            <form
              className="container-fluid d-flex flex-column align-items-center p-0 w-100"
              onSubmit={ this.props.handleSubmit( this.onSubmit )}
            >
              <Field
                name="email"
                component={ EmailInput }
                label="e-mail"
                renderError={ renderError }
              />

              <Field
                name="message"
                component={ MessageInput }
                label="message"
                renderError={ renderError }
              />

              <button 
                className="btn btn-primary w-25 shadow-lg"
              >
                Send Message
              </button>
            </form>
          :
            <></>
          }
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
    isAuthenticated: state.currentUser.isAuthenticated,
    message: message,
    errors: state.errors.message
  })
}

const wrappedForm = reduxForm({
  form: 'sendEmail',
  validate: validateMessage,
})( ContributePage )


export default connect( 
  mapStateToProps, 
  { sendFeedback, clearMessages, removeError }
  )( wrappedForm );