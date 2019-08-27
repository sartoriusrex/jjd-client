import React from 'react';
import { Link } from 'react-router-dom';

import ButtonGroup from '../ButtonGroup';
import Thumbnail from '../Thumbnail';


const TechniqueListItem = ( 
  { techId, name, type, positionMajor, positionMinor, mode , description, thumbnail, username, isAuthenticated, isCorrectUser }
  ) => {

  function renderDescription(){

    if( !description ){
      return ""
    } else {
      let string = description;

      return ( string.substring(0,50) + "..." )
    }
  }

  return(
    <li
      className="list-group-item list-group-item-action card mb-3 w-100 shadow-sm">
      <div className="row no-gutters card-body d-flex justify-content-between flex-nowrap p-0">

        {/* Thumbnail only available for Youtube Videos */}

        <Link
          to={ `/techniques/${ techId }` }
          className="d-flex flex-fill justify-content-start align-items center mw-100 p-0"
        >
          <Thumbnail thumbnail={ thumbnail } />

          <div
            className="btn text-left pl-4 w-75"
          >
            <h6 className="card-title">{ name }</h6>
            <div>
              { type } from { positionMinor } of { positionMajor } - { mode }
            </div>
            <div>
              <small className="card-text">
                created by { username } 
              </small>
            </div>
            <small className="card-text">
              { renderDescription() }
            </small>
          </div>
          
        </Link>

        { isAuthenticated &&
          <ButtonGroup
            techId={ techId }
            isCorrectUser={ isCorrectUser }
            techName={ name }
            techThumb={ thumbnail }
          />
        }

      </div>
    </li>
  )
};

export default TechniqueListItem;