import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return(
    <div className="container-fluid p-0 pt-5 text-center">
      <small className="pr-1 pl-1">
        Icons made by -
        <Link 
          to="https://www.flaticon.com/authors/google" title="Google">
          Google 
        </Link> 
        - from - 
        <Link 
          to="https://www.flaticon.com/"
          title="Flaticon">
          www.flaticon.com 
        </Link>
        - is licensed by -
        <Link 
          to="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank">
          CC 3.0 BY 
        </Link>
      </small>
    </div>
  )
}

export default Footer;

