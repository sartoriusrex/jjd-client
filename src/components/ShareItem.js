import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { updateShareState, shareItem } from "../store/actions/auth";
import { renderError } from './FormValidations';
import EmailInput from './EmailInput';
import './ShareItem.css';


class ShareItem extends React.Component {

	render(){
		const { shareState, updateShareState } = this.props;

		if( shareState.action !== "share" ) {
			return <></>
		}

		return(
			<div
				className="share-modal"
				onClick={ () => updateShareState({}) }
			>
				<form 
					onSubmit={ () => updateShareState({}) }
					className="share-form"
					onClick={ e => e.stopPropagation() }
				>
					<p className="text-light text-center mb-1">Share </p>
					<em className="text-light text-center mb-1">{ shareState.techName || shareState.seqName }</em> 
					<p className="text-light text-center mb-1">with</p>
					<Field 
						name="email"
						component={ EmailInput }
						label="e-mail"
						renderError={ renderError }
					/>
					<div 
						className="w-100 d-flex justify-content-between"
						onClick={ e => e.stopPropagation() }
					>
						<button 
							className="btn btn-warning"
							onClick={ () => updateShareState({}) }
						>
							Cancel
						</button>
						<button 
							className="btn btn-info"
							type="submit"
						>
							Share
						</button>
					</div>
				</form>
				
			</div>
		)
	}
}

function mapStateToProps( state ){
  return {
    username: state.currentUser.user.username,
		shareState: state.shareState
  };
}

const wrappedForm = reduxForm({
  form: 'shareItem',
})( ShareItem )

export default connect( 
	mapStateToProps, 
	{ updateShareState, shareItem }
	)( wrappedForm );