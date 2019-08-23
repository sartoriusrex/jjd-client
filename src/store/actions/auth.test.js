import * as actions from './auth';
import * as types from './actionTypes';

describe ( 'auth actions', () => {
	it ('should create an action to set the current user', () => {
		const user = { username: 'dmai' }

		const expectedAction = {
			type: types.SET_CURRENT_USER,
			user
		}
		
		expect ( actions.setCurrentUser( user ) ).toEqual( expectedAction );
	})

	it ('should create an action to update user likes', () => {
		const user = { likedTechs: [
			'kimura',
			'triangle'
		]};

		const expectedAction = {
			type: types.UPDATE_USER_LIKES,
			user
		}

		expect( actions.updateStoreLikes( user )).toEqual( expectedAction );
	})
})