import React from 'react';

const EmailInput = ({ input, label, meta, renderError }) => {
  return(
    <div className="input-group mb-3 w-100">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">e-mail</span>
      </div>
      <input
        type="text" 
        className="form-control" 
        aria-label="e-mail" 
        aria-describedby="e-mail"
        { ...input }
      />
      { renderError( meta ) }
    </div>
  )
}

export default EmailInput;