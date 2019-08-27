import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import TechniqueIndex from 'containers/TechniqueIndex';
import moxios from 'moxios';


beforeEach( () => {
	moxios.install();
	moxios.stubRequest( 
		'/api/users/fakeid/techniques/',
		{
			status: 200,
			response: [
				{ techname: 'techname-1' },
				{ techname: 'techname-2' }
			]
		}	
	)
});

afterEach( () => {
	moxios.uninstall();
});

it ('can fetch a list of techniques and display them' , () => {
	//Attempt to render entire techniqueIndex
	const wrapped = mount(
		<Root initialState={ 
			{ currentUser: 
				{ isAuthenticated: true,
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
		}>
			<TechniqueIndex />
		</Root>
	)

	expect(wrapped.find('li').length).toEqual(2);

	wrapped.unmount();
});