import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

import AuthInput from './AuthInput';
import ErrorsDisplay from './ErrorsDisplay';
import MessagesDisplay from './MessagesDisplay';
import { validateAuth } from './FormValidations';
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import { clearMessages } from '../store/actions/mail';

class AuthForm extends React.Component {

  componentWillUnmount(){
    this.props.clearMessages();
    this.props.removeError();
  }

  onSubmit = formValues => {
    const authType = this.props.signUp ? "signup" : "signin";

    this.props.authUser( authType, formValues );
  }

  render(){
    const { heading, buttonText, signUp, errors, message, history, removeError } = this.props;

    history.listen( () => {
      removeError();
    })

    return(
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <div className="container-fluid pb-5 mb-5">
          <form
            onSubmit={ this.props.handleSubmit( this.onSubmit ) }
            className="w-100 d-flex justify-content-center flex-column align-items-center pt-3"
          >

            <h2> { heading } </h2>

            {
              message &&
              <MessagesDisplay message={ message } />
            }
            {
              errors &&
              <ErrorsDisplay errors={ errors } />
            }
            {
              !signUp &&
              <Field
                name="user"
                component={ AuthInput }
                label="E-mail Address or Username"
              />
            }

            {
              signUp && (
              <>
                <Field
                  name="email"
                  component={ AuthInput }
                  label="E-mail Address"
                  type="email"
                />
              
                <Field
                  name="username"
                  component={ AuthInput }
                  label="Username"
                  type="text"
                />
              </>
            )
            }

            <Field
              name="password"
              component={ AuthInput }
              label="Password"
              className="form-control w-75"
              type="password"
            />

            {
              !signUp &&
              <Link className='btn btn-link' to="/passwordreset">
                forgot password
              </Link>
            }

            <button
              className="btn btn-primary mb-4 mt-4 w-50 shadow-lg"
              type="submit"
            >
              { buttonText }
            </button>
          </form>
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
    errors: state.errors.message,
  })
}

const wrappedForm = reduxForm({
  form: 'auth',
  validate: validateAuth
})( AuthForm );

export default connect( mapStateToProps, { authUser, removeError, clearMessages } )( wrappedForm );