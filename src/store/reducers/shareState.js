import { UPDATE_SHARE_STATE } from "../actions/actionTypes";

export default( state = {} , action ) => {
	switch( action.type ) {
		case UPDATE_SHARE_STATE:
			return action.shareInfo;
		default:
			return state;
	}
}