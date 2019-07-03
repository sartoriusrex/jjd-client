import React from 'react';
import { connect } from 'react-redux';

import { showSequence } from "../../store/actions/sequences";
import SequenceShowDescription from './SequenceShowDescription';
import SequenceShowSequence from './SequenceShowSequence';
import LoadSpinner from '../LoadSpinner';
import SearchForm from '../SearchBar';
import BackButton from '../BackButton';
import ButtonGroup from '../ButtonGroup';


class SequenceShow extends React.Component {

  componentDidMount(){
    let { showSequence } = this.props;
    let { sequenceid } = this.props.match.params;

    showSequence( sequenceid )
  }

  handleNav( e, text ) {
    e.stopPropagation();
    
  }

  render(){

    if( !this.props.sequence ) {
      let { showSequence } = this.props;
      let { sequenceid } = this.props.match.params;

      showSequence( sequenceid )

      return(
        <LoadSpinner />
      )
    }

    const { name, _id, user, description, notes, techniques } = this.props.sequence;

    const { userId, isAuthenticated } = this.props;

    return(
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <div className="d-flex justify-content-between align-items-baseline w-100 mb-4 pb-4">

          <div className="w-25 d-flex">
            <BackButton />
          </div>

          <SearchForm to="Sequences" go="seqs" />

          <div className="w-25">
            { "" }
            {/* This Div is used for formatting purposes only: so that the SearchTechniquesBar can be centered and the back button on the far left */}
          </div>

        </div>

        <div className="d-flex justify-content-between align-items-baseline bg-info text-light p-2 pb-3 pt-3 rounded mb-4 mt-4">
          <h5 className="m-0"> { name } </h5>
          { 
            isAuthenticated &&
            <ButtonGroup
              dropdownStyle="btn-group rounded bg-light"
              isCorrectUser={ userId === user._id }
              seqId={ _id }
            />
          }
        </div>

        <div
          className="btn-group d-flex justify-content-between mb-2 border-bottom border-info"
          role="group"
          aria-label="Sequences and Descriptions"
        >
          <button 
            type="button" 
            className="btn w-50"
            data-toggle="collapse" data-target="#sequence" aria-expanded="false" aria-controls="sequence"
            onClick={ ( e ) => this.handleNav( e, "Sequence" ) }
          >
              Sequence
          </button>
          <button 
            type="button" 
            className="btn w-50"
            data-toggle="collapse" data-target="#description" aria-expanded="false" aria-controls="description"
            onClick={ ( e ) => this.handleNav( e, "Description" ) }
          >
              Description & Notes
          </button>
        </div>
        
        <div className="collapse p-0 m-0 w-100" id="description">
          <SequenceShowDescription
            description={ description }
            notes={ notes } 
          />
        </div>

        <div className="collapse show p-0 m-0 w-100" id="sequence">
          <SequenceShowSequence
            techniques={ techniques }
          />
        </div>

      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => {
  // Match seq found in state to seq found in the URL Params (techid)

  let seqsArr = state.sequences;
  let seqid = ownProps.match.params.sequenceid;

  function findIt( array, id ){
    return array.filter( el => el._id === id )
  }

  let foundSeq = findIt( seqsArr, seqid )

  // Match state with found element;

  return {
    sequence: foundSeq[0],
    userId: state.currentUser.user.id,
    isAuthenticated: state.currentUser.isAuthenticated
  }
}

export default connect( mapStateToProps, { showSequence })( SequenceShow );