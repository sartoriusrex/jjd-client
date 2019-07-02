import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import history from '../../history';
import AuthInput from '../AuthInput';
import ErrorsDisplay from '../ErrorsDisplay';
import MessagesDisplay from '../MessagesDisplay';
import { validateUpdate } from '../FormValidations';
import { removeError } from "../../store/actions/errors";
import { clearMessages } from '../../store/actions/mail';
import { updateUser } from '../../store/actions/auth';


class UpdateUserForm extends React.Component {

  componentWillUnmount(){
    this.props.clearMessages();
  }

  onSubmit = formValues => {
    this.props.updateUser( formValues );
  }

  render(){
    const { heading, errors, message, removeError, item } = this.props;
    let itemTitle = item.charAt(0).toUpperCase() + item.slice(1)

    history.listen( () => {
      removeError();
    })

    return(

      <div className="container-fluid d-flex flex-column align-items-center justify-content-start">

        <form
          onSubmit={ this.props.handleSubmit( this.onSubmit ) }
          className="w-100 d-flex justify-content-center flex-column align-items-center"
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
          

          <Field
            name={ item }
            component={ AuthInput }
            label={ `New ${ itemTitle }` }
            className="form-control w-75"
            type={ item }
          />

          <Field
            name={ `confirm${ itemTitle }`}
            component={ AuthInput }
            label={ `Confirm new ${ itemTitle }` }
            className="form-control w-75"
            type={ item }
          />


          <button
            className="btn btn-primary btn-block btn-lg mb-4 mt-4 w-75 shadow-lg"
            type="submit"
          >
            Submit Change
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

const wrappedUpdateForm = reduxForm({
  form: 'updateUser',
  validate: validateUpdate
})( UpdateUserForm );

export default connect( mapStateToProps, { removeError, clearMessages, updateUser } )( wrappedUpdateForm );