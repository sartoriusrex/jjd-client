import React from 'react';
import { Field } from 'redux-form';

// This component renders an non-changeable input with name either entry, reaction, or resource that can be removed with the remove button

const TechniqueRefFieldArrayItem = ( { name, onClick, component, label, classStyle, renderError, normalize, sequence } ) => {
  return(
    <Field
      name={ name }
      type="text"
      component={ component }
      label={ label }
      classStyle={ classStyle }
      renderError={ renderError }
      normalize={ normalize }
      sequence={ sequence }
    />
  )
}

export default TechniqueRefFieldArrayItem;