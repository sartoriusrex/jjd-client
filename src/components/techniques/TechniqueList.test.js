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
				name:'techname-1',
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
			},
			{
				_id:5432,
				name:'techname-2',
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
});

afterEach( () => wrapped.unmount() );

it ('creates a techniquelist item', () => {
	expect( wrapped.find('li').length ).toEqual( 2 );
});

it ('show the content for each techniquelistitem', () => {
	expect( wrapped.render().text() ).toContain('techname-1');
	expect( wrapped.render().text() ).toContain('techname-2');
	expect( wrapped.render().text() ).toContain('tech-description');
});