import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER, UPDATE_USER_LIKES } from "./actionTypes";
import { addError, removeError } from "./errors";
import { sendMessage } from './mail';
import history from '../../history';
import { reset } from 'redux-form';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
})

export const setAuthorizationToken = token => {
  setTokenHeader( token );
}

export const logout = () => (
  dispatch => {
    localStorage.clear();
    setAuthorizationToken( false );
    dispatch( setCurrentUser( {} ) );
  }
)

const login = ( token, user, dispatch, res ) => {
  // Set token in local storage to keep session, then pass it off to the store to verify access to routes, then set the current user info and remove error messages from login attempts and send any messages;
  localStorage.setItem( "jwtToken", token );
  setAuthorizationToken( token );
  dispatch( setCurrentUser( user ) );
  dispatch( removeError() );
  dispatch( sendMessage( res ));
}

export const authUser = ( type, userData ) => dispatch => (
  new Promise( ( resolve, reject ) => {
    return apiCall(
      "post",
      `/api/auth/${ type }`,
      userData
      )
      .then( res => {
        if( type === "signin" ) {
          let token = res.token;
          let user = {
            email: res.email,
            likedTechs: res.likedTechs,
            likedSeqs: res.likedSeqs,
            username: res.username,
            id: res.id,
            techniques: res.techniques,
            sequences: res.sequences,
          }

          history.goBack();
          login( token, user, dispatch, res );
          resolve();
        } else {
          dispatch( removeError() );
          dispatch( sendMessage( res ));
          dispatch( reset( "auth" )); //Reset the auth form from redux-form action reset
          resolve();
        }
      })
      .catch( err => {
        dispatch( addError( err.message ) );
        reject();
      });
  })
)

export const verifyAccount = accountVerificationToken => dispatch => (
  apiCall(
    "get",
    `/api/auth/verifyaccount/${ accountVerificationToken }`
  )
  .then( res => {
    if( res.message === "The Account Verification Token Could Not Be Found." ) {
      dispatch( addError( res.message ))
      history.push("/")
    } else {
      let token = res.token;
      let user = {
        email: res.email,
        likedTechs: res.likedTechs,
        username: res.username,
        id: res.id,
        techniques: res.techniques,
        sequences: res.sequences,
      }

      history.push("/");
      login( token, user, dispatch, res );
    }
  })
  .catch( err => {
    dispatch( addError( err.message ) )
  })
)

export const updateStoreLikes = user => ({
  type: UPDATE_USER_LIKES,
  user
})

export const updateLikes = ( newLikes, to ) => ( dispatch, getState ) => {
  let { currentUser } = getState();
  let id = currentUser.user.id;

  return (
    apiCall(
      "patch",
      `/api/users/${ id }/like`,
      { to, newLikes }
    )
    .then( function( res ) {
      let user = {
        email: res.email,
        likedTechs: res.likedTechs,
        likedSeqs: res.likedSeqs,
        username: res.username,
        id: res._id,
        techniques: res.techniques,
        sequences: res.sequences,
      }

      dispatch( updateStoreLikes( user ) )
    })
    .catch( function( err ) {
      dispatch( addError( err.message ) ) }
    )
  );
}

export const sendResetPasswordEmail = formValues => dispatch => {
  dispatch( reset( 'resetPassword' ) );
  // Dispatch redux-form action to reset resetPassword form

  let email = formValues.email;

  return (
    apiCall(
      "post",
      '/api/resetpassword',
      { email }
    )
    .then( res => {
      dispatch( sendMessage( res ) )
    })
    .catch( err => {
      dispatch( addError( err.message ) ) 
    })
  );
}

export const compareToken = token => dispatch => (
  apiCall(
    "get",
    `/api/auth/${ token }`
  )
  .then( res => {
    if( res.message === "The Token has either changed, is incorrect, or has surpassed the 48-hour expiration time" ) {
      dispatch( addError( res.message ))
      history.push("/")
    } else {
      dispatch( sendMessage( res ))
    }
  })
  .catch( err => {
    dispatch( addError( err.message ) ) 
  })
)

export const resetPassword = ( token, formValues ) => dispatch => {
  let { email, password } = formValues;

  return(
    apiCall(
      "patch",
      `/api/auth/${ token }`,
      { token, email, password }
    )
    .then( res => {
      let token = res.token;
      
      let user = {
        email: res.email,
        likedTechs: res.likedTechs,
        likedSeqs: res.likedSeqs,
        username: res.username,
        id: res.id,
        techniques: res.techniques,
        sequences: res.sequences,
      }

      history.push("/");
      login( token, user, dispatch, res );
    })
    .catch( err => {
      dispatch( addError( err.message ) )
    })
  )
}

export const updateUser = formValues => ( dispatch, getState ) => {
  let { currentUser } = getState();
  let userid = currentUser.user.id;
  let update;

  if ( formValues.username ) {
    update = {
      username: formValues.username
    } 
  } else if ( formValues.email ) {
    update = {
      email: formValues.email
    }
  } else {
    update = {
      password: formValues.password
    }
  }

  return(
    apiCall(
      "patch",
      `/api/auth/updateuser/${ userid }`,
      update
    )
    .then( res => {
      let token = res.token;
      
      let user = {
        email: res.email,
        likedTechs: res.likedTechs,
        likedSeqs: res.likedSeqs,
        username: res.username,
        id: res.id,
        techniques: res.techniques,
        sequences: res.sequences,
      }

      history.push(`/users/${ user.id }/manageaccount`);
      login( token, user, dispatch, res );
    })
    .catch( err => {
      dispatch( addError( err.message ) ) 
    })
  )
}

export const deleteUser = userid => dispatch => (
  apiCall(
    "delete",
    `/api/auth/updateuser/${ userid }`,
  )
  .then( () => {
    dispatch( setCurrentUser({}) );
    history.push( '/' );
  })
  .catch( err => dispatch( addError( err.message ) ) )
);