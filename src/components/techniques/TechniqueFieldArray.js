import React from 'react';
import TechniqueFieldArrayItem from './TechniqueFieldArrayItem';
import TechniqueInput from './TechniqueInput';

// This component renders in the TechniqueForm a list of steps or notes, where the user can add or remove an array item, which is a simple text input

const TechniqueFieldArray = ({ fields, meta: { error }, arrayName, buttonText, arrayItemName, renderError, normalize }) => {
  return(
    <>
      <div className="d-flex justify-content-start pt-2">
        <h6>{ arrayName }:</h6>
      </div>

      <ul className="list-group mb-2">
        { fields.map( ( item, index ) => (
          <li 
            key={ index }
            className="d-flex justify-content-between align-items-baseline"
          >
            <TechniqueFieldArrayItem
              name={ item }
              component={ TechniqueInput }
              label={ `${ arrayItemName } #${ index + 1 }` }
              classStyle="input-group-sm input-group mb-1"
              onClick={ () => fields.remove( index ) }
              renderError={ renderError }
              normalize={ normalize }
            />
          </li>
        ))}
        { error && <li className="error">{ error }</li> }
      </ul>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-dark btn-sm shadow"
          type="button"
          onClick={ () => fields.push() }>
          { buttonText }
        </button>
      </div>
    </>
  )
}

export default TechniqueFieldArray;