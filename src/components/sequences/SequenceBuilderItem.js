import React from 'react';

import { ReactComponent as RightArrow } from '../../icons/right-arrow-forward.svg';
import "../ButtonGroup.css"
import ThumbnailSmall from '../ThumbnailSmall';


const SequenceBuilderItem = ({ thumbnail }) => {
  return(
    <li className="d-flex justify-content-center align-items-center pr-1 pl-1">
      <ThumbnailSmall thumbnail={ thumbnail } />

      <RightArrow width="24px" height="24px" className="path-color-light pl-2" />
    </li>
  )
}

export default SequenceBuilderItem;