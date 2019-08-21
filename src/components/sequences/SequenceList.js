import React from "react";
import { connect } from "react-redux";

import { fetchSequences } from "../../store/actions/sequences";
import SequenceListItem from "./SequenceListItem";
import NoResult from '../NoResult';
import ErrorBoundary from '../ErrorBoundary';


class SequenceList extends React.Component {

  componentDidMount() {
    const { fetchSequences, search } = this.props;

    fetchSequences( search );
  }

  render(){
    const { sequences, currentUser, likedSeqs, isAuthenticated } = this.props;

    let sequenceList = sequences.map( sequences => {
      return(
        <ErrorBoundary key={ sequences._id } >
          <SequenceListItem
            seqId={ sequences._id }
            username={ sequences.user.username }
            description={ sequences.description }
            name={ sequences.name }
            thumbnail={ sequences.thumbnail }
            isCorrectUser={ currentUser === sequences.user._id }
            isAuthenticated={ isAuthenticated }
            likedSeqs={ likedSeqs }
          />
        </ErrorBoundary>
    )});

    return (
      <ul className="list-group list-group-flush mb-5 pb-5" id="techniques-list">
        { 
          sequenceList.length === 0 ?
          <NoResult />
          :
          sequenceList
        }
      </ul>
    )
  }
}

function mapStateToProps( state ){

  return {
    sequences: state.sequences,
    currentUser: state.currentUser.user.id,
    isAuthenticated: state.currentUser.isAuthenticated,
  };
}

export default connect( mapStateToProps, { fetchSequences })( SequenceList );