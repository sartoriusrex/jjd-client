import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as ButtonDown } from '../../icons/button_down.svg';
import "../ButtonGroup.css"
import ThumbnailSmall from '../ThumbnailSmall';
import ErrorBoundary from '../ErrorBoundary';


const SequenceShowSequence = ({ techniques }) => {
  return(
    <ul className="list-group">
      { techniques.map( ( tech, i ) => {
        let key;
        !tech._id ? key = tech : key = tech._id; 
        // On initial Load, tech is just the id, but becomes populated afterwards by mongoose populate function - this is to prevent key errors on initial load;

        return(
          <ErrorBoundary>
            <div 
              key={ key }
              className="pt-2 pb-2 d-flex flex-column justify-content-center align-items-center w-100"
            >
              <Link 
                className="w-100"
                to={ `/techniques/${ tech._id }` }
              >
                <li
                  className="list-group-item p-1 mb-2 bg-secondary rounded w-100 d-flex flex-fill justify-content-start align-items-center "
                  // className="d-flex flex-fill justify-content-start align-items center mw-100 p-0"
                >
                  <ThumbnailSmall thumbnail={ tech.thumbnail } />

                  <div className="d-flex flex-column justify-content-between align-items-start pl-2">
                    <h6 className="p-0 m-0 mb-1 text-light">
                      { tech.name }
                    </h6>

                    <div className="text-light">
                      <small className="m-0">
                        { tech.type } from { tech.positionMinor } of { tech.positionMajor } - { tech.mode}
                      </small>
                    </div>
                  </div>

                </li>
              </Link>
              <ButtonDown 
                width="30px" 
                height="30px" 
                className="path-color pt-2"
              />
            </div>
          </ErrorBoundary>
        )
      })}
    </ul>
  )
}

export default SequenceShowSequence;