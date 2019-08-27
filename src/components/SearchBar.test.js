import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import SearchBar from 'components/SearchBar';


let wrapped;

beforeEach( () => {
	wrapped = mount( 
		<Root>
			<SearchBar />
		</Root>
	);
});

afterEach( () => {
	wrapped.unmount();
});


it( 'contains a search form and a field', () => {
	expect( wrapped.find( 'form' ));
	expect( wrapped.find( 'input' ))
});

describe( 'the form and input', () => {
	beforeEach( () => {
		wrapped.find( 'input' ).simulate( 'change', {
			target: { value: 'kimura' }
		})
		wrapped.update();
	});

	it ( 'has ah an input that users can submit text in', () => {
		expect( wrapped.find( 'input' ).prop('value')).toEqual('kimura');
	});
	
	it ( 'has an form that users can submit', () => {
		wrapped.find( 'form' ).simulate( 'submit' );
		wrapped.update();
	
		expect( wrapped.find( 'input' ).prop( 'value' )).toEqual('kimura');
		// We expect it to still be the value after submit, because Redux-Form's keep dirty is set to true
	});
})