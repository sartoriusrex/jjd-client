import React from 'react';

const ErrorsDisplay = ({ errors }) => {
  return(
    <div className="w-100 p-3 mb-2 border border-danger rounded d-flex justify-content-center text-danger">
      { errors }
    </div>
  )
}

export default ErrorsDisplay;