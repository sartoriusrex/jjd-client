import React from 'react';

const MessageInput = ({ input, label, meta, renderError }) => {
  return(
    <div className="input-group w-100 mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Message</span>
      </div>
      <textarea
        className="form-control"
        aria-label="Message"
        { ...input }
      />
      { renderError( meta ) }
    </div>
  )
}

export default MessageInput;