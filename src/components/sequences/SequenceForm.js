import React from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import TechniqueInput from '../techniques/TechniqueInput';
import TechniqueFieldArray from '../techniques/TechniqueFieldArray';
import ErrorsDisplay from '../ErrorsDisplay';
import BackButton from '../BackButton';
import { capitalizeFirstLetter, renderError, validateSequence } from '../FormValidations';
import { addToSeq } from '../../store/actions/sequenceRefs';
import { addError } from '../../store/actions/errors';

import TechniqueRefFieldArray from '../techniques/TechniqueRefFieldArray';


const SequenceNameInput = ({ input, label, meta, renderError }) => {
  return (
    <div className="input-group input-group-lg mb-2">
      <div className="input-group-prepend">
        <label className="input-group-text">{ label }</label>
      </div>
      <input
        autoComplete="off"
        className="form-control flex-grow-1"
        { ...input }
      />
      { renderError( meta )}
    </div>
  )
}

class SequenceForm extends React.Component {

  addMoreTechs = () => {
    let { currentValues, addToSeq, edit, sequenceId } = this.props;

    let seq = {};

    seq.name = currentValues.name;
    seq.description = currentValues.description;
    seq.notes = currentValues.notes;
    seq.techsToAdd = currentValues.techniques;
    seq.edit = edit;
    seq.id = sequenceId;

    addToSeq( seq )
  }

  onSubmit = formValues => {
    const { addError } = this.props;

    if( !formValues.techniques ) {
      return addError( "Please Add Techniques" )
    }

    this.props.onSubmit( formValues );
  }

  render(){
    const { errors, pageTitle, userId, initialValues } = this.props;

    let displayTechs = initialValues.techniques;

    return(
      <div className="d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-between mb-4">
          <div className="w-25">
            <BackButton />
          </div>
          <h2>
            { pageTitle }
          </h2>
          <div className="w-25"></div>
        </div>

        <form
          onSubmit={ this.props.handleSubmit( this.onSubmit ) }
          className="d-flex justify-content-center flex-column"
        >
          { errors.message &&
            <ErrorsDisplay errors={ errors.message } />
          }

          <Field
            name="name"
            component={ SequenceNameInput }
            label="Name*"
            renderError={ renderError }
            normalize={ capitalizeFirstLetter }
          />

          <Field
            name="description"
            component={ TechniqueInput }
            label="Description"
            renderError={ renderError }
            normalize={ capitalizeFirstLetter }
          />

          <FieldArray
            name="notes"
            component={ TechniqueFieldArray }
            props={{
              arrayName: "Notes",
              buttonText: "Add Note",
              arrayItemName: "Note",
              renderError: renderError,
              normalize: capitalizeFirstLetter
            }}
          />

           <FieldArray
            name="techniques"
            component={ TechniqueRefFieldArray }
            props={{
              name: "techniques",
              arrayName: "Techniques",
              buttonText: "Add Technique",
              arrayItemName: "Technique",
              renderError: renderError,
              userId: userId,
              currentRefs: displayTechs,
              techId: "techid",
              techName: "name",
              sequence: true,
              onClick: this.addMoreTechs,
              classStyle: "input-group pr-2 pl-2",
              liClassStyle: "d-flex justify-content-between align-items-center border border-secondary p-1 m-1 bg-white rounded"
            }}
          />

          <div className="d-flex justify-content-center mt-4">
            <div
              className="pr-4 mb-4 mt-4"
              onClick={ (e) => e.stopPropagation() }
            >
              <BackButton text="Cancel" />
            </div>
            <button
              className="btn btn-success mb-4 mt-4"
              type="submit"
            >
              Submit Sequence
            </button>
          </div>

        </form>
      </div>
    )
  }
}

const selector = formValueSelector('SequenceForm')

function mapStateToProps( state ){
  return{
    errors: state.errors,
    userId: state.currentUser.user.id,
    currentValues: selector( state, 'name', 'description', 'notes', 'techniques')
  };
}

const wrappedSeqForm = reduxForm({
  form: 'SequenceForm',
  validate: validateSequence,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
  destroyOnUnmount: false,
})( SequenceForm );

export default connect( mapStateToProps, { addToSeq, addError } )( wrappedSeqForm );