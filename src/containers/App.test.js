import React from "react";
import { shallow } from 'enzyme';
import App from './App';
import Main from 'containers/Main';
import Navbar from 'containers/Navbar';

// Checks to see that App renders its children;
let wrapped;

beforeEach( () => {
	wrapped = shallow( <App /> );
});

it ( 'App renders Main', () => {
	expect( wrapped.find( Main ).length ).toEqual( 1 );
});

it ( 'App renders Navbar', () => {
	expect( wrapped.find( Navbar ).length ).toEqual( 1 );
});