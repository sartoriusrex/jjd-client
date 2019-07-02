import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import LoadSpinner from './LoadSpinner';
import ErrorsDisplay from './ErrorsDisplay';
import MessagesDisplay from './MessagesDisplay';
import { clearMessages } from '../store/actions/mail';
import { removeError } from '../store/actions/errors';
import { compareToken, resetPassword } from "../store/actions/auth";
import { renderError } from './FormValidations';

class ResetPasswordTokenPage extends React.Component {

  componentDidMount(){
    let token = this.props.match.params.token;

    this.props.compareToken( token ); //this page and token should only be available via link from email, but even if token exists and non-verified user accesses page, they would need to know the user email to log in or make any changes, since this call doesn't update state, but only renders a view;
  }

  componentWillUnmount(){
    this.props.clearMessages();
    this.props.removeError();
  }

  renderError({ error, touched }) {
    if( touched && error ) {
      return (
        <div className="alert alert-danger p-1 m-0">{ error }</div> 
      );
    }
  }

  renderInput = ({ input, label, meta, className="form-control w-75" }) => {
    return (
      <>
        <label className="mt-4 w-75">{ label }</label>
        <input
          autoComplete="off"
          className={ className }
          {...input}
        />
        { renderError( meta )}
      </>
    )
  }

  onSubmit = ( formValues ) => {
    let token = this.props.match.params.token;

    this.props.resetPassword( token, formValues ); //resetPassword is called with the token and the formvalues specifically to compare the token with the token found associated with the email entered; if they do not match, then we inform the user and user must refresh
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
      <div className="container-fluid pb-5 mb-5">
        {
          message &&
          <MessagesDisplay message={ message } />
        }
        {
          errors &&
          <ErrorsDisplay errors={ errors } />
        }

        <form
          onSubmit={ this.props.handleSubmit( this.onSubmit ) }
          className="w-100 d-flex justify-content-center flex-column align-items-center"
        >
          <h2> Set a New Password </h2>

          <Field
            name="email"
            component={ this.renderInput }
            label="E-mail Address"
          />

          <Field
            name="password"
            component={ this.renderInput }
            label="Password"
            className="mb-4 form-control w-75"
          />

          <button
            className="btn btn-primary btn-block btn-lg mb-4 mt-4 w-75 shadow-lg"
            type="submit"
          >
            Set New Password
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
})( ResetPasswordTokenPage )

export default connect( mapStateToProps, { clearMessages, removeError, compareToken, resetPassword })( wrappedForm );