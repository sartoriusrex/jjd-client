import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import ListTabNav from 'components/ListTabNav';


describe( 'List tab nav that fetches techniques or sequences', () => {
	it( 'renders 1 button when not authenticated', () => {
		let wrapped = mount(
			<Root >
				<ListTabNav />
			</Root>
		);

		expect( wrapped.find( 'button' ).length).toEqual( 1 );

		wrapped.unmount();
	});

	it( 'renders 3 buttons when authennticated', () => {
		let wrapped = mount(
			<Root initialState={ {currentUser: { isAuthenticated: true }} }>
				<ListTabNav />
			</Root>
		);

		expect( wrapped.find( 'button' ).length).toEqual( 3 );
		expect( wrapped.find( 'button' ).at(0).text() ).toEqual('All');
		expect( wrapped.find( 'button' ).at(1).text() ).toEqual('Created by Me');
		expect( wrapped.find( 'button' ).at(2).text() ).toEqual('Liked');

		wrapped.unmount();
	});

	it( 'updated class of buttons when we click "all"', () => {
		let wrapped = mount(
			<Root initialState={ {currentUser: { isAuthenticated: true }} }>
				<ListTabNav />
			</Root>
		);

		// Click "all"
		wrapped.find( 'button' ).at(0).simulate('click');

		// Class for first button 'btn border-bottom' while others is just 'btn' and NOT 'border-bottom'

		expect ( wrapped.find( 'button' ).at(0).hasClass( 'btn border-bottom' )).toBeTruthy();

		expect ( wrapped.find( 'button' ).at(1).not( '.border-bottom' ).hasClass( 'btn' )).toBeTruthy();

		expect ( wrapped.find( 'button' ).at(2).not( '.border-bottom' ).hasClass( 'btn' )).toBeTruthy();

		wrapped.unmount();
	});
});