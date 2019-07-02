import React from 'react';

import { ReactComponent as HeartOutline } from '../icons/heart_outline.svg';
import { ReactComponent as HeartFilled } from '../icons/heart_filled.svg';
import "./ButtonGroup.css"

const ButtonGroupHeartButtons = ({
  handleLike, likedItems, likedId, updateLikeFunction, isLikedFunction
}) => {
  return(
    <button
      type="button"
      className="btn btn-light bg-transparent border-0 d-flex justify-content-center align-items-center"
      onClick={ ( e ) => {
        e.stopPropagation();

        handleLike( likedItems, likedId, updateLikeFunction );
      }}
    >
      {
        isLikedFunction( likedId, likedItems ) ?
        <HeartFilled width="15px" height="15px" className="path-color-like" />
        :
        <HeartOutline width="15px" height="15px" className="path-color" />
      }
    </button>
  )
}

export default ButtonGroupHeartButtons;