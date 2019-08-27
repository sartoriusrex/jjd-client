import React from 'react';
import { renderError } from './FormValidations';


const AuthInput = (
  { input, label, meta, className="form-control w-75", type }
  ) => {
    
  let inputType;

  type === "username" ?
  inputType = "text" : inputType = type;

  return (
    <>
      <label className="mt-4 w-75">{ label }</label>
      <input
        autoComplete="off"
        className={ className }
        type={ inputType }
        {...input}
      />
      { renderError( meta )}
    </>
  )
}

export default AuthInput;