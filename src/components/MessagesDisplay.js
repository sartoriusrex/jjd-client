import React from 'react';

const MessagesDisplay = ({ message }) => {
  return(
    <div className="w-100 p-3 mb-2 border border-success rounded d-flex justify-content-center text-success">
      { message }
    </div>
  )
}

export default MessagesDisplay;