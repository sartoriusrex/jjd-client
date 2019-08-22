import React from "react";
import ReactDOM from 'react-dom';
import NoResult from 'components/NoResult';

// Checks to see that NoResult renders the text "Sorry, No Results"

it ( 'Noresult renders', () => {
	const div = document.createElement('div');
	ReactDOM.render(<NoResult />, div);
	
	expect(div.innerHTML).toContain("Sorry, No Results");

	ReactDOM.unmountComponentAtNode(div);
});