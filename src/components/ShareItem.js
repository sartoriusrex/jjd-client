import React from 'react';

const handleShare = () => {

}

const ShareItem = ({ item }) => {
	return(
		<div className="container container-sm share-modal">
			<h4>Share { item }</h4>
			<form 
				onSubmit={ handleShare }
				className="w-75 d-"
			>

			</form>
		</div>
	)
}

export default ShareItem;