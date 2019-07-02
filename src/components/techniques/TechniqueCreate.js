import React from 'react';
import { connect } from 'react-redux';
import { createTechnique } from "../../store/actions/techniques";
import TechniqueForm from './TechniqueForm';

class TechniqueCreate extends React.Component {

  onSubmit = ( formValues ) => {
    this.props.createTechnique( formValues );
  }

  render() {
    return (
      <TechniqueForm
        pageTitle="Create a Technique"
        onSubmit={ this.onSubmit }
      />
    )
  }
}

export default connect( null, { createTechnique })( TechniqueCreate );