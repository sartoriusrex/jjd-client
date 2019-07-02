import { SEND_MESSAGE, CLEAR_MESSAGES } from "../actions/actionTypes";

const messages = ( state = [], action ) => {
  switch( action.type ){
    case SEND_MESSAGE:
      return [ ...state, action.message ]
    case CLEAR_MESSAGES:
      return []
    default:
      return state;
  }
}

export default messages;