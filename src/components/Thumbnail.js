import React from 'react';
import defaultImg from '../images/default.png';

const Thumbnail = ({ thumbnail }) => {
  return(
    <>
      {
      !thumbnail ?
        <div className="d-flex justify-content-center align-items-center p-0">
          <img 
          // className="list-group-item p-0 border-light img-thumbnail rounded-circle"
          style={{
            backgroundSize: "cover",
            borderRadius: "50% 50% 50% 50%",
            width: "80px",
            height: "80px",
          }}
          src={ defaultImg }
          alt="default" />
        </div>
        :
        <div className="d-flex justify-content-center align-items-center p-0">
          <img
          className="img-thumbnail p-0 border-light"
          src={ thumbnail }
          alt="technique thumbnail" />
        </div>
      }
    </>
  )
}

export default Thumbnail;