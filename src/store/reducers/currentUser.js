import { SET_CURRENT_USER, UPDATE_USER_LIKES } from "../actions/actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false, //true when logged in
  user: {}, // all the user info
};

export default ( state = DEFAULT_STATE, action ) => {
  switch( action.type ) {
    case SET_CURRENT_USER:
      return {
        // convert empty object to false or, if there are keys, true
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
    case UPDATE_USER_LIKES:
      return { ...state, user: action.user }
    default:
      return state;
  }
}