import React from 'react';

const TechniqueInput = ({ input, label, meta, renderError, classStyle="input-group input-group-sm mb-2" }) => {
  return (
    <div className={ classStyle }>
      <div className="input-group-prepend">
        <label className="input-group-text">{ label }</label>
      </div>
      <input
        autoComplete="off"
        className="form-control flex-grow-1"
        { ...input }
      />
      { renderError( meta )}
    </div>
  )
}

export default TechniqueInput;