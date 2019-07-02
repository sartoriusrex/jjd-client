import React from 'react';
import { Link } from 'react-router-dom';

import ButtonGroup from '../ButtonGroup';
import Thumbnail from '../Thumbnail';


const SequenceListItem = ( 
  { seqId, name, description, thumbnail, username, isAuthenticated, isCorrectUser }
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
    <div
      className="list-group-item list-group-item-action card mb-3 w-100 shadow-sm">
      <div className="row no-gutters card-body d-flex justify-content-between flex-nowrap p-0">

        {/* Thumbnail only available for Youtube Videos */}

        <Link
          to={ `/sequences/${ seqId }` }
          className="d-flex flex-fill justify-content-start align-items center mw-100 p-0"
        >
          <Thumbnail thumbnail={ thumbnail } />

          <div
            className="btn text-left pl-4"
          >
            <h6 className="card-title">{ name }</h6>
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
            seqId={ seqId }
            isCorrectUser={ isCorrectUser }
          />
        }

      </div>
    </div>
  )
};

export default SequenceListItem;