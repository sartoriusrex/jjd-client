import React from 'react';

const handleChange = handler => ( { target: { files } } ) =>
  handler( files.length ? { file: files[0], name: files[0].name} : {} );

const FileInput = ({
  input: { 
    onChange,
    onBlur,
    value: { 
      omitValue, //Must deconstruct in order to separate from passing to component, otherwise React will re-render without file
      name 
    }, 
    ...inputProps
  },
  meta: omitMeta, //Must also deconstruct to omit
  label,
  ...props
  }) => (
    <div className="custom-file w-50 align-self-center mb-4">
      <input
        type="file"
        accept='.jpg, .png, .jpeg'
        onChange={ handleChange( onChange ) }
        onBlur={ handleChange( onBlur ) }
        className="custom-file-input"
        {...inputProps}
        {...props} 
      />
      <label className="custom-file-label">
        { ( name ? name : label ) }
        {/* If there is a file with a name, then show that, otherwise show the label */}
      </label>
    </div>
);

export default FileInput;