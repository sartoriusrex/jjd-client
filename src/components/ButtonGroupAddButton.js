import React from 'react';

import { ReactComponent as ButtonAdd } from '../icons/button_add.svg';
import { ReactComponent as ButtonRemove } from '../icons/button_remove.svg';
import "./ButtonGroup.css"

const ButtonGroupAddButton = ({
  handleSeq, techId, techName, techThumb, sequenceRefs, addToSeq, techsInSeq 
  }) => {
    return(
      <button 
        type="button" 
        className="btn btn-light bg-transparent border-0"
        onClick={ ( e ) => {
          e.stopPropagation();

          handleSeq( techId, techName, techThumb, sequenceRefs, addToSeq )
        }}
      >
        { 
          // does the current tecnique already exist in the seqRef ready to build a seq? if so, show remove, othrrwise show add button
          techsInSeq.map( tech => tech._id )
            .indexOf( techId ) === -1 ?

          <ButtonAdd width="15px" height="15px" className="path-color" />
          :
          <ButtonRemove width="17px" height="17px" className="path-color" />
        }
      </button>
    )
}

export default ButtonGroupAddButton;