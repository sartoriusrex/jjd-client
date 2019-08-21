import React from 'react';
import { connect } from "react-redux";

import history from '../../history';
import { removeSequence } from '../../store/actions/sequenceRefs';
import SequenceBuilderItem from './SequenceBuilderItem';
import ErrorBoundary from '../ErrorBoundary';


class SequenceBuilder extends React.Component{

  handleSave = () => {
    const { userId, sequenceToBuild } = this.props;

    if( !sequenceToBuild.edit ) {
      history.push({
        pathname: `/users/${ userId }/sequences/new`,
        state: { initialValues: sequenceToBuild }
      });
    } else {
      history.push({
        pathname: `/users/${ userId }/sequences/${ sequenceToBuild.id }/edit`,
        state: { initialValues: sequenceToBuild }
      });
    }

    this.props.removeSequence();
  }

  handleCancel = () => {
    this.props.removeSequence();
  }

  render(){
    const { isAuthenticated, sequenceToBuild } = this.props;

    // To view Sequence Builder must 1) be logged in AND 2) there must be techniques pushed to be built
    if( !isAuthenticated || (
      sequenceToBuild.techniques.length === 0 &&
      sequenceToBuild.name === ""
      )){
      return <></>
    }

    const { techniques, name } = this.props.sequenceToBuild;

    let techniqueList = techniques.map( ( techs, i ) => {
      return(
        <ErrorBoundary>
          <SequenceBuilderItem
            key={ i }
            thumbnail={ techs.thumbnail }
          />
        </ErrorBoundary>
      )
    });

    return(
      <div className="container d-flex flex-column align-items-center main fixed-bottom pb-0">

        <p className="text-light w-50 bg-primary rounded-top p-2 text-center">{ name ? name : "New Sequence" }</p>

        <div className="d-flex flex-column justify-content-center align-items-center w-100 bg-primary rounded-top p-0 mt-n4">

          <ul className="list-group list-group-horizontal w-100 border-0 p-2 d-flex align-items-center justify-content-center overflow-auto">
            { techniqueList }
          </ul>

          <div className="d-flex justify-content-between w-75 pb-2">
            <button 
              className="btn btn-secondary shadow"
              onClick={ this.handleCancel }> Cancel </button>
            <button 
              className="btn btn-light text-primary shadow"
              onClick={ this.handleSave }>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){

  return {
    userId: state.currentUser.user.id,
    isAuthenticated: state.currentUser.isAuthenticated,
    sequenceToBuild: state.sequenceRefs,
  };
}

export default connect( mapStateToProps, { removeSequence } )( SequenceBuilder );