import React from 'react';

import { ReactComponent as BarMenu } from '../icons/button_menu.svg';
import "./ButtonGroup.css"

const Accordion = ({ buttonText, theArray, renderArray, id, arrayItemTitle }) => {
  return(
    <div className="accordion" id={ id }>
      <div className="card border-0 bg-transparent">
        <div className="card-header bg-transparent border-left-0 border-right-0 border-bottom-0 border-top border-dark rounded-0 p-0" id="headingOne">
          <h2 className="mb-0 mt-0 d-flex align-items-center">
            <button className="btn btn-light bg-transparent border-0 pr-0 pl-0" type="button" data-toggle="collapse" data-target={`#collapse${id}` }aria-expanded="false" aria-controls={`collapse${id}`}>
              <BarMenu
                width="12px" 
                height="12px"
                className="path-color"
              />
              { `   ${ buttonText } ` }
            </button>
          </h2>
        </div>

        <div id={`collapse${id}` } className="collapse" aria-labelledby="headingOne" data-parent={`#${ id }`}>
          <div className="card-body p-0 bg-transparent">
            <small>
              { renderArray( theArray, arrayItemTitle ) }
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion;