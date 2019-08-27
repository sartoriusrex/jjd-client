import currentUser from './currentUser';
import { SET_CURRENT_USER, UPDATE_USER_LIKES } from "../actions/actionTypes";


describe( 'currentUser reducer', () => {
	let user;
	let DEFAULT_STATE;

	beforeEach( () => {
		user = {
			username: 'dmai'
		}

		DEFAULT_STATE = {
			isAuthenticated: false, //true when logged in
			user: {}, // all the user info
		};
	});

	it ('handles actions to update user', () => {
		const action = {
			type: SET_CURRENT_USER,
			user
		}
	
		const result = {
			isAuthenticated: true,
			user: {
				username: 'dmai'
			}
		}
	
		const newState = currentUser( DEFAULT_STATE, action )
	
		expect ( newState ).toEqual( result )
	});

	it ( 'updates the user\'s list of liked items', () => {
		const state = {
			isAuthenticated: true,
			user: {
				username: 'dmai'
			}
		}

		const action = {
			type: UPDATE_USER_LIKES,
			user: {
				username: 'dmai',
				likedTechs: [
					'kimura',
					'triangle',
				]
			}
		}

		const result = {
			isAuthenticated: true,
			user: {
				username: 'dmai',
				likedTechs: [
					'kimura',
					'triangle'
				]
			}
		}

		const newState = currentUser( state, action );

		expect ( newState ).toEqual( result );
	});

	it ( 'handles action with unknown types', () => {
		const newState = currentUser( DEFAULT_STATE, {});

		const result = {
			isAuthenticated: false,
			user: {}
		}

		expect ( newState ).toEqual( result );
	});
});
