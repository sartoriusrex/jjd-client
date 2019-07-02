import React from 'react';
import { Field } from 'redux-form';

// This component renders an input with name either step or note that can be removed with the remove button

const TechniqueFieldArrayItem = ( { name, onClick, component, label, classStyle, renderError, normalize } ) => {
  return(
    <>
      <Field
        name={ name }
        type="text"
        component={ component }
        label={ label }
        classStyle={ classStyle }
        renderError={ renderError }
        normalize={ normalize }
      />
      <button
        className="btn btn-sm close d-flex align-items-center m-1"
        type="button"
        onClick={ onClick }
      >
        <span className="pt-1">&times;</span>
      </button>
    </>
  )
}

export default TechniqueFieldArrayItem;