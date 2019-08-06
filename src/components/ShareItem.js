import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { updateShareState } from "../store/actions/auth";
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
			<div className="container share-modal">
				<form 
					onSubmit={ updateShareState }
					className="w-100 d-flex flex-column justify-content-center align-items-center p-2 rounded share-form"
				>
					<p className="text-light">Share { shareState.techName || shareState.seqName } with</p>
					<Field 
						name="email"
						component={ EmailInput }
						label="e-mail"
						renderError={ renderError }
					/>
					<div className="w-100 d-flex justify-content-between">
						<button className="btn btn-warning">Cancel</button>
						<button className="btn btn-info">Share</button>
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

export default connect( mapStateToProps, { updateShareState })( wrappedForm );