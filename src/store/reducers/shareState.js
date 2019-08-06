import { UPDATE_SHARE_STATE } from "../actions/actionTypes";

export default( state = { display: "none" }, action ) => {
	switch( action.type ) {
		case UPDATE_SHARE_STATE:
			return { ...state, display: action.display };
		default:
			return state;
	}
}