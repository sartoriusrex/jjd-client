import React from 'react';
import defaultImg from '../images/default.png';

const ThumbnailSmall = ({ thumbnail }) => {
  return(
    <>
      {
        thumbnail ?
        <div>
          <img 
            src={ thumbnail }
            style={{
              backgroundSize: "cover",
              borderRadius: "50% 50% 50% 50%",
              width: "60px",
              height: "60px",
          }}
            alt="technique"
          />
        </div>
        :
        <div>
          <img 
            style={{
              backgroundSize: "cover",
              borderRadius: "50% 50% 50% 50%",
              width: "60px",
              height: "60px",
            }}
            src={ defaultImg }
            alt="default"
          />
        </div>
      }
    </>
  )
}

export default ThumbnailSmall;