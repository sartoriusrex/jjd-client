import React from 'react';
import { Link } from 'react-router-dom';

import TechniqueRefFieldArrayItem from './TechniqueRefFieldArrayItem';
import TechniqueRef from './TechniqueRef';
import { ReactComponent as ButtonUp } from '../../icons/button_up.svg';
import { ReactComponent as ButtonDown } from '../../icons/button_down.svg';
import "../ButtonGroup.css"
import ThumbnailSmall from '../ThumbnailSmall';

// This component renders in the TechniqueForm a list of entries or resources, where the user can add or remove an array item, which is input from a separate component called TechniqueAddRef

class TechniqueRefFieldArray extends React.PureComponent {

  moveUp = ( swap, index ) => {
    if ( index === 0 ){
      return
    } else {
      swap( index, index - 1 )
    }
  }
  moveDown = ( swap, index, length ) => {
    if ( index === ( length - 1 ) ) {
      return
    } else {
      swap( index, index + 1 )
    }
  }

  render(){
    const { fields, name, arrayName, buttonText, arrayItemName, renderError, userId, currentRefs, techId, techName, classStyle, sequence, onClick, liClassStyle="d-flex justify-content-between align-items-center" } = this.props;

    return(
      <>
        <div className="d-flex justify-content-start pt-2">
          <h6>{ arrayName }:</h6>
        </div>

        <ul className="list-group mb-2">
          { 
            fields.map( ( item, index ) => {
              let thumbnail = fields.get(index).thumbnail;
              
              return(
                <li 
                  key={ item }
                  className={ liClassStyle }
                >
                  {
                    sequence && 
                    <ThumbnailSmall thumbnail={ thumbnail } />
                  }
                  <TechniqueRefFieldArrayItem
                    name={ item }
                    component={ TechniqueRef }
                    label={ `${ arrayItemName } #${ index + 1 }` }
                    classStyle={ classStyle }
                    renderError={ renderError }
                    sequence={ sequence }
                  />
                  {
                    sequence &&
                    <>
                      <button
                        type="button"
                        className="btn btn-light bg-transparent border-0 pl-1 pr-1"
                        onClick={ () => this.moveUp( fields.swap, index ) }
                      >
                        <ButtonUp width="25px" height="25px" className="path-color" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-light bg-transparent border-0 pl-1 pr-1"
                        onClick={ () => this.moveDown( fields.swap, index, fields.length ) }
                      >
                        <ButtonDown width="25px" height="25px" className="path-color" />
                      </button>
                    </>
                  }
                  <button
                    className="btn btn-sm close d-flex align-items-center m-1"
                    type="button"
                    onClick={ () => this.props.fields.remove( index ) }
                  >
                    <span>&times;</span>
                  </button>
                </li>
              )
            })
          }
        </ul>
        
        <div className="d-flex justify-content-center">
          {
            sequence ? //does sequenceForm render this component?
            <Link
              to="/techniques/all"
            >
              <button
                className="btn btn-dark btn-sm"
                type="button"
                onClick={ onClick }
              >
                { buttonText }
              </button>
            </Link>
            :
            <Link
              to={{ 
                pathname: `/users/${ userId }/techniques/addRef/${ techId }`,
                state: { name, arrayName, arrayItemName, currentRefs, techId, techName }
              }}
            >
              <button
                className="btn btn-dark btn-sm shadow"
                type="button"
              >
                { buttonText }
              </button>
            </Link>
          }
        </div>

      </>
    )
  }
}

export default TechniqueRefFieldArray;