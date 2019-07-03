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
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <TechniqueForm
          pageTitle="Create a Technique"
          onSubmit={ this.onSubmit }
        />
      </div>
    )
  }
}

export default connect( null, { createTechnique })( TechniqueCreate );