import React from 'react';
import { withRouter } from 'react-router';

const LinkButton = ( props ) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    ...rest
  } = props
  return (
    <button
      { ...rest }
      onClick={ ( e ) => {
        onClick && onClick(e);
        e.preventDefault();
        e.stopPropagation();
        history.push(to);
      }}
    />
  )
}

export default withRouter(LinkButton);