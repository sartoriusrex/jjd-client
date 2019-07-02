import React from 'react';

import LinkButton from './LinkButton';


const ButtonGroupAuthorizedActionButtons = ({
  userId, itemId, item
}) => {
  return(
    <>
      <LinkButton
        to={`/users/${ userId }/${ item }/${ itemId }/delete`}
        className="dropdown-item border-0 text-white"
      >
        Delete
      </LinkButton>
      <LinkButton
        to={`/users/${ userId }/${ item }/${ itemId }/edit`}
        className="dropdown-item border-0 text-white"
        onClick={ ( e ) => e.stopPropagation() }
      >
        Edit
      </LinkButton>
      {/* <div className="dropdown-divider"></div> */}
  </>
  )
}

export default ButtonGroupAuthorizedActionButtons;