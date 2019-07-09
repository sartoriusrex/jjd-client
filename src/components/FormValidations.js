import React from "react";

export const capitalizeFirstLetter = string => (string.charAt(0).toUpperCase() + string.slice(1) );

export const renderError = ({ error, touched }) => {
  if( touched && error ) {
    return (
      <div className="border border-danger text-danger rounded p-1 m-1">{ error }</div> 
    );
  }
}

export const validateTechs = ( formValues ) => {
  const errors = {};

  // In the first check, we are checking with regex to see if the video url is a valid url
  if( formValues.video && formValues.video.length ) {
    let url = formValues.video

    const res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g);
  
    if( res == null) {
      errors.video = 'Please enter a valid URL'
    }
  }

  if( !formValues.name ) {
    errors.name = 'Please provide a name'
  }

  if( !formValues.type ) {
    errors.type = 'What type?'
  }

  if( !formValues.positionMajor ) {
    errors.positionMajor = "What position?"
  }

  if( !formValues.positionMinor ) {
    errors.positionMinor = 'Where?'
  }

  if( !formValues.mode ) {
    errors.mode = 'Gi, No Gi, or Both?'
  }

  if( formValues.steps && formValues.steps.length ) {
    const stepArrayErrors = [];

    formValues.steps.forEach( (step, stepIndex) => {
      if (!step || !step.length) {
        stepArrayErrors[stepIndex] = 'Add a step or remove'
      }
    })

    if (stepArrayErrors.length) {
      errors.steps = stepArrayErrors
    }
  }

  if( formValues.notes && formValues.notes.length ) {
    const noteArrayErrors = [];

    formValues.notes.forEach( ( note, noteIndex ) => {
      if (!note || !note.length) {
        noteArrayErrors[ noteIndex ] = 'Add a note or remove'
      }
    })

    if (noteArrayErrors.length) {
      errors.notes = noteArrayErrors
    }
  }

  if( formValues.resources && formValues.resources.length ) {
    const resourceArrayErrors = [];

    formValues.resources.forEach( ( resource, resourceIndex ) => {
      if (!resource || !resource.length) {
        resourceArrayErrors[ resourceIndex ] = 'Add a resource or remove'
      }
    })

    if (resourceArrayErrors.length) {
      errors.resources = resourceArrayErrors
    }
  }

  return errors;
};

export const validateMessage = ( formValues ) => {
  const errors = {};

  if( !formValues.email ) {
    errors.email = 'Please provide an e-mail'
  }

  if( !formValues.message ) {
    errors.message = 'What do you want to say?'
  }

  return errors;
};

export const validateReset = ( formValues ) => {
  const errors = {};

  if( !formValues.email ) {
    errors.email = 'Please provide an e-mail'
  }

  return errors;
};

export const validateSequence = ( formValues ) => {
  const errors = {};

  if( !formValues.name ) {
    errors.name = "You must provide a name."
  }

  return errors;
}

export const validateAuth = ( formValues ) => {
  const errors = {};

  if( !formValues.user ) {
    errors.user = "Please enter your e-mail address or username"
  }

  if( !formValues.email ) {
    errors.email = 'Please enter a valid e-mail'
  }

  if( !formValues.password ) {
    errors.password = 'Please enter a password'
  }

  if( !formValues.username ) {
    errors.username = 'Please enter a username'
  }

  return errors;
}

export const validateUpdate = ( formValues ) => {
  const errors = {};

  if( !formValues.username ) {
    errors.username = 'Please enter a username'
  } 

  if( formValues.username !== formValues.confirmUsername ) {
    errors.confirmUsername = "Usernames entered do not match"
  }

  if( !formValues.email ) {
    errors.email = 'Please enter an e-mail address'
  } 

  if( formValues.email !== formValues.confirmEmail ) {
    errors.confirmEmail = "E-mail addresses entered do not match"
  }

  if( !formValues.password ) {
    errors.password = 'Please enter a password'
  } 

  if( formValues.password !== formValues.confirmPassword ) {
    errors.confirmPassword = "Passwords entered do not match"
  }

  return errors;
}