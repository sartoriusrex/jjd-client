import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { clearMessages } from '../store/actions/mail';
import { sendResetPasswordEmail } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import ErrorsDisplay from './ErrorsDisplay';
import MessagesDisplay from './MessagesDisplay';
import EmailInput from './EmailInput';
import { validateReset, renderError } from './FormValidations';

class RequestResetPasswordPage extends React.Component {

  componentWillUnmount(){
    this.props.clearMessages();
  }

  onSubmit = ( formValues ) => {
    const sendResetPasswordEmail = this.props.sendResetPasswordEmail;
    const clearMessages = this.props.clearMessages;
    const removeError = this.props.removeError;

    clearMessages();
    removeError();
    sendResetPasswordEmail( formValues );
  }

  render(){
    const { message, errors, history } = this.props;

    history.listen( () => {
      removeError();
    })

    return(
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

        <h2
          className="pt-4 pb-4"
        >
          Reset Password
        </h2>

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
          <button 
            className="btn btn-primary w-25 shadow-lg"
          >
            Reset Password
          </button>
        </form>
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

const wrappedForm = reduxForm({
  form: 'resetPassword',
  validate: validateReset,
})( RequestResetPasswordPage )

export default connect( mapStateToProps, { sendResetPasswordEmail, clearMessages, removeError })( wrappedForm );