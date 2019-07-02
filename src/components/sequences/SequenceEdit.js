import React from 'react';
import { connect } from 'react-redux';

import { showSequence, editSequence } from "../../store/actions/sequences";
import SequenceForm from './SequenceForm';
import LoadSpinner from '../LoadSpinner';


class SequenceEdit extends React.Component {

  componentDidMount(){
    if( !this.props.location.state ) {
      let { showSequence } = this.props;
      let { sequenceid } = this.props.match.params;

      showSequence( sequenceid )
    }
  }

  onSubmit = formValues => {
    this.props.editSequence(
      this.props.match.params.sequenceid,
      formValues,
    )
  }

  render(){

    let initialValues;

    if( this.props.location.state ) {
      initialValues = this.props.location.state.initialValues;
    }

    if( !this.props.sequence && !this.props.initialValues ) {
      return (
        <LoadSpinner />
      )
    }

    return(
      <SequenceForm
        pageTitle="Edit Sequence"
        initialValues={ initialValues || this.props.sequence } //if user goes to edit initially, initialvalues is coming from api call to retrieve technique in db; however, if during the edit user decides to add more techs, add tech in seqform passes off seqid and edit boolean to seqref, which passes it onto buttongroup down to buttongroup add button, which tells the builder to send user back to edit page instead of create page with new initialValues and the api call does not get called again.
        onSubmit={ this.onSubmit }
        sequenceId={ this.props.match.params.sequenceid }
        edit
      />
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

export default connect( mapStateToProps, { showSequence, editSequence })( SequenceEdit );