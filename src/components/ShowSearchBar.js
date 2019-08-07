import React from 'react';

import BackButton from './BackButton';
import SearchForm from './SearchBar';

const ShowSearchBar = ({ to, go }) => {
	return(
		<div className="d-flex flex-column flex-sm-row justify-content-between align-items-center w-100">

			<div className="w-25 d-flex align-self-start">
				<BackButton />
			</div>

			<SearchForm to={ to } go={ go } />

			<div className="w-25 d-none d-sm-block">
				{ "" }
				{/* This Div is used for formatting purposes only: so that the SearchTechniquesBar can be centered and the back button on the far left */}
			</div>

		</div>
	)
}

export default ShowSearchBar;