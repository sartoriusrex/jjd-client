import React from 'react';

import SearchForm from './SearchBar';
import CreateButton from './CreateButton';

const IndexSearchBar = ({ searchTo, createTo, classStyle }) => {
	return(
		<div className="d-flex flex-column-reverse align-items-center justify-content-center flex-sm-row justify-content-sm-between">
			<SearchForm to={ searchTo } />
			<CreateButton to={ createTo } classStyle={ classStyle }/>
		</div>
	)
}

export default IndexSearchBar;