import React from 'react';

const TechniqueRef = ({ input, label, meta, renderError, sequence, classStyle }) => {

  return (
    <div className={ classStyle }>
      {
        !sequence &&
        <div className="input-group-prepend">
          <label className="input-group-text">{ label }</label>
        </div>
      }
      
      <input
        autoComplete="off"
        className="form-control flex-grow-1 bg-white"
        { ...input }
        value={ input.value.name }
        readOnly
      />
      { renderError( meta )}
    </div>
  )
}

export default TechniqueRef;