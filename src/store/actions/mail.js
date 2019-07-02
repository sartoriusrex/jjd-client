import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { SEND_MESSAGE, CLEAR_MESSAGES } from "./actionTypes";
import { reset } from 'redux-form';

export const sendMessage = message => ({
  type: SEND_MESSAGE,
  message
})

export const sendFeedback = messageData => ( dispatch, getState ) => {
  dispatch( reset( 'sendEmail' ) )
  let { currentUser } = getState();

  let id =        currentUser.user.id;
  let email =     currentUser.user.email;
  let username =  currentUser.user.username;
  let from =      messageData.email;
  let to =        messageData.to;
  let body =      messageData.message;
  let subject =   messageData.subject;

  if( from !== email ) {
    let message = "Are you sure that's your e-mail address?"
    return dispatch( addError( message ));
  }

  return (
    apiCall(
      "post",
      `/api/users/${ id }/message`,
      { from, to, username, body, subject }
    )
    .then( res => {
      dispatch( sendMessage( res ) )
    })
    .catch( err => {
      dispatch( addError( err.message ) ) }
    )
  );
}

export const clearMessages = () => ({
  type: CLEAR_MESSAGES
})