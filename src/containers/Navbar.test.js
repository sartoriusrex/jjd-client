import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import Navbar from 'containers/Navbar';


let wrapped;

beforeEach( () => {
	wrapped = mount( 
		<Root>
			<Navbar isAuthenticated={ false } />
		</Root>
	);
});

afterEach( () => {
	wrapped.unmount();
});


it( 'contains a navbar and links', () => {
	expect( wrapped.find( 'nav' ).length ).toEqual( 1 );
	expect( wrapped.find( 'a' ).length ).toEqual( 11 );
	// No matter if isAuthenticated is true or false, the same number of links should be displayed
});

// describe( 'the form and input', () => {
// 	beforeEach( () => {
// 		wrapped.find( 'input' ).simulate( 'change', {
// 			target: { value: 'kimura' }
// 		})
// 		wrapped.update();
// 	});

// 	it ( 'has ah an input that users can submit text in', () => {
// 		expect( wrapped.find( 'input' ).prop('value')).toEqual('kimura');
// 	});
	
// 	it ( 'has an form that users can submit', () => {
// 		wrapped.find( 'form' ).simulate( 'submit' );
// 		wrapped.update();
	
// 		expect( wrapped.find( 'input' ).prop( 'value' )).toEqual('kimura');
// 		// We expect it to still be the value after submit, because Redux-Form's keep dirty is set to true
// 	});
// })