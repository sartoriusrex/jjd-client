import { UPDATE_SHARE_STATE } from "../actions/actionTypes";

export default( state = "none" , action ) => {
	switch( action.type ) {
		case UPDATE_SHARE_STATE:
			return action.display;
		default:
			return state;
	}
}