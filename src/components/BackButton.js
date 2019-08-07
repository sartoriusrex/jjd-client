import React from 'react';
import history from '../history';

import { ReactComponent as LeftArrow } from '../icons/left-arrow-backward.svg';
import "./ButtonGroup.css"

const BackButton = ({ text, className="btn btn-secondary shadow-lg mb-3 mb-sm-0" }) => {
  return(
    <button
      className={ className }
      onClick={ history.goBack }
    >
      { text }
    </button>
  )
}

BackButton.defaultProps = {
  text: <LeftArrow width="15px" height="15px" className="path-color-light" />
}

export default BackButton;