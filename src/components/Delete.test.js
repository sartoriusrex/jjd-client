import React from 'react';
import { mount } from 'enzyme';

import Delete from 'components/Delete';

let wrapped;

beforeEach( () => {
	wrapped = mount( <Delete item="example" /> );
});

afterEach( () => {
	wrapped.unmount();
});

it( 'contains a search form and a field', () => {
	expect( wrapped.find( 'button' ).length ).toEqual( 3 );
	expect( wrapped.find( 'h3' ) );
});
