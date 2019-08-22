import React from "react";
import { shallow } from 'enzyme';
import App from './App';
import Main from './Main';
import Navbar from './Navbar';

// Checks to see that App renders

it ( 'App renders Main', () => {
	const component = shallow(<App />);
	
	expect( component.find( Main ).length ).toEqual( 1 );
});

it ( 'App renders Navbar', () => {
	const wrapped = shallow( <App /> );

	expect( wrapped.find( Navbar ).length ).toEqual( 1 );
});