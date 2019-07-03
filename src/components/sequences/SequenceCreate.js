import React from 'react';
import { connect } from 'react-redux';
import { createSequence } from "../../store/actions/sequences";
import SequenceForm from './SequenceForm';

class SequenceCreate extends React.Component {

  onSubmit = ( formValues ) => {
    this.props.createSequence( formValues );
  }

  render() {
    let { initialValues } = this.props.location.state;

    return (
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <SequenceForm
          pageTitle="Create a Sequence"
          onSubmit={ this.onSubmit }
          initialValues={ initialValues }
        />
      </div>
    )
  }
}

export default connect( null, { createSequence })( SequenceCreate );