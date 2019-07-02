import axios from "axios";

export function setTokenHeader( token ) {
  if( token ) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function apiCall( method, path, data, config ) {
  return new Promise( ( resolve, reject ) => {
    return axios[method]( path, data, config )
      .then( res => {
        return resolve( res.data );
      })
      .catch( err => {
        reject( err.response.data.error );
      });
  })
}