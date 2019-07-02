import React from 'react';

const SelectField =
  ( { input, label, renderError, children, meta } ) => (
  <div className="input-group input-group-sm mb-2 d-flex flex-column mr-1 ml-1">
    <div className="input-group-prepend rounded-0 rounded-top w-100 mb-n1 mr-0">
      <label className="input-group-text w-100 rounded-top text-center">
        { label }
      </label>
    </div>

      <select className="custom-select rounded-bottom w-100 text-center"
      { ...input }
      >
        { children }
      </select>

      { renderError( meta ) }

  </div>
);

export default SelectField;