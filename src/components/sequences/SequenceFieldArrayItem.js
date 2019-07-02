import React from 'react';
import { Field } from 'redux-form';

// This component renders an non-changeable input with name either entry, reaction, or resource that can be removed with the remove button

const SequenceFieldArrayItem = ( { name, onClick, component, label, classStyle, normalize } ) => {
  return(
    <>
      <Field
        name={ name }
        type="text"
        component={ component }
        label={ label }
        classStyle={ classStyle }
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

export default SequenceFieldArrayItem;