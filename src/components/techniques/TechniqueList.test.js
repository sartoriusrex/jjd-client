import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import TechniqueList from './TechniqueList';

let wrapped;

beforeEach( () => {
	const firstState = {
		currentUser: {
			isAuthenticated: true,
			likedTechs: [
				'kimura',
				'triangle'
			],
			user: { 
				id: 1234 
			}
		},
		techniques: [
			{
				_id:4321,
				name:'techname',
				thumbnail:'thumbnail-link',
				type:'tech-type',
				positionMajor:'tech-major-position',
				positionMinor:'tech-minor-position',
				mode:'tech-mode',
				description:'tech-description',
				user: {
					username: "dmai",
					id: 1234
				}
			}
		]
	}

	wrapped = mount(
		<Root initialState={ firstState }>
			<TechniqueList />
		</Root>
	)
})

it ('creates techniquelist item', () => {

});