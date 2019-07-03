import React from 'react';
import { connect } from "react-redux";

import LoadSpinner from '../LoadSpinner';
import Delete from '../Delete';
import { showSequence, removeSequence } from '../../store/actions/sequences';

class SequenceDelete extends React.Component {

  componentDidMount(){
    this.props.showSequence( this.props.match.params.sequenceid );
  }
  
  onSubmit = () => {
    const { userid, sequenceid } = this.props.match.params;
    const { removeSequence } = this.props;

    removeSequence( userid, sequenceid );
  }

  render(){
    const { userid, sequenceid } = this.props.match.params;
    const { sequence } = this.props;

    if( !sequence ) {
      return <LoadSpinner />
    }

    return(
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <Delete
        item="Sequence"
        actionHandler={ this.onSubmit }
        userid={ userid }
        itemid={ sequenceid }
        />
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
  }
}

export default connect( mapStateToProps, { showSequence, removeSequence })( SequenceDelete );