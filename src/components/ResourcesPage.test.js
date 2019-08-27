import React from 'react';
import { mount } from 'enzyme';
import ResourcesPage from './ResourcesPage';


describe( 'Resource Page', () => {
	it ('renders the resources page', () => {
		let wrapped = mount( <ResourcesPage />);

		expect ( wrapped.find('li').length).toEqual( 73 );
	})
});
