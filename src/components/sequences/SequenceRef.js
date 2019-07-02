import React from 'react';

const SequenceRef = ({ input, label, meta, classStyle="input-group input-group-sm mb-2" }) => {

  return (
    <div className={ classStyle }>
      <div className="input-group-prepend">
        <label className="input-group-text">{ label }</label>
      </div>
      <input
        autoComplete="off"
        className="form-control flex-grow-1 bg-white"
        { ...input }
        value={ input.value.name }
        disabled
      />
    </div>
  )
}

export default SequenceRef;