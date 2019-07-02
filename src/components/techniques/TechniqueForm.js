import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import "./TechniqueShow.css";
import ErrorsDisplay from '../ErrorsDisplay';
import { 
  capitalizeFirstLetter,
  renderError,
  validateTechs 
} from '../FormValidations';
import VideoPlayer from '../VideoPlayer';
import TechniqueFieldArray from './TechniqueFieldArray';
import TechniqueRefFieldArray from './TechniqueRefFieldArray';
import TechniqueInput from './TechniqueInput';
import { techCatOptions } from './TechniqueCategoryOptionsList';
import SelectField from '../SelectField';
import BackButton from '../BackButton';

class TechniqueForm extends React.Component {

  onSubmit = formValues => {
    this.props.onSubmit( formValues );
  }

  render() {
    const { pageTitle, initialValues, techId, userId, errors, } = this.props;

    return (
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

        <p className="mb-2"> * = Required </p>

        <form
          onSubmit={ this.props.handleSubmit( this.onSubmit ) }
          className="d-flex justify-content-center flex-column"
          // encType="multipart/form-data"
        >

          { errors.message &&
            <ErrorsDisplay errors={ errors.message } />
          }

            {/* If there are initialValues and there is a video in there, display the videoplayer with that prop passed to it, otherwise do not render videoplayer */}
          { 
            ( initialValues && ( initialValues.video ) ) &&
              <VideoPlayer
                url={ initialValues.video }
              />
          }

          <Field
            name="video"
            component={ TechniqueInput }
            label="Video URL**"
            classStyle="input-group align-self-center mb-4 w-100"
            renderError={ renderError }
          />

          {/* <Field
            name="image"
            component={ FileInput }
            label="Choose Image less than 16MB"
          /> */} 
          {/* For now, uploading images or any other files will nto be supported. May require setting up another server for images and linking them to requests for each technique - not worth it right now, considering images are less important than videos */}

          <Field
            name="name"
            component={ TechniqueInput }
            label="Name*"
            classStyle="input-group mb-2"
            renderError={ renderError }
            normalize={ capitalizeFirstLetter }
          />

          <div className="d-flex flex-column flex-sm-row justify-content-between align-items baseline pt-1 pb-1">

            <Field
              component={ SelectField }
              label="Type*"
              name="type"
              renderError={ renderError }
            >
              {/* {Map through the type array and for each item make an option with value equal to its display name} */}
              { 
                techCatOptions.type.map( optionName => (
                  <option
                    key={ optionName }
                    value={ optionName }>
                    { optionName }
                  </option>
                ))
              }
            </Field>

            <Field
              component={ SelectField }
              label="Major Position*"
              name="positionMajor"
              renderError={ renderError }
            >
              {/* More Complicated: map through positionMajor array of objects and make optgroup and optgroup label of each object's name. THEN map through each optgroup's options array and produce an option with value equal to its name */}
            { 
              techCatOptions.positionMajor.map(
                ( optGroup, i ) => (
                  <optgroup
                    key={ i }
                    label={ optGroup.name }>
                    { optGroup.options.map( ( opt, i ) => (
                      <option key={ i } value={ opt }>{ opt }</option>
                    )) }
                  </optgroup>
                )
              )
            }
            </Field>

            <Field
              component={ SelectField }
              label="Minor Position*"
              name="positionMinor"
              renderError={ renderError }
            >
              { 
                techCatOptions.positionMinor.map( optionName => (
                  <option
                    key={ optionName }
                    value={ optionName }>
                    { optionName }
                  </option>
                ))
              }
            </Field>

            <Field
              component={ SelectField }
              label="Mode*"
              name="mode"
              renderError={ renderError }
            >
              { 
                techCatOptions.mode.map( optionName => (
                  <option
                    key={ optionName }
                    value={ optionName }>
                    { optionName }
                  </option>
                ))
              }
            </Field>

          </div>

          <Field
            name="description"
            component={ TechniqueInput }
            label="Description"
            renderError={ renderError }
            normalize={ capitalizeFirstLetter }
          />

          <FieldArray
            name="steps" 
            component={ TechniqueFieldArray }
            props={{
              arrayName: "Steps",
              buttonText: "Add Step",
              arrayItemName: "Step",
              renderError: renderError,
              normalize: capitalizeFirstLetter,
            }}
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

          {
            initialValues &&
            <>
              <FieldArray
                name="entries"
                component={ TechniqueRefFieldArray }
                props={{
                  name: "entries",
                  arrayName: "Entries",
                  buttonText: "Add Entry",
                  arrayItemName: "Entry",
                  renderError: renderError,
                  userId: userId,
                  currentRefs: initialValues.entries,
                  techId: techId,
                  techName: initialValues.name,
                  classStyle: "input-group-sm input-group mb-1 pr-2"
                }}
              />

              <FieldArray
                name="reactions"
                component={ TechniqueRefFieldArray }
                props={{
                  name: "reactions",
                  arrayName: "Reactions",
                  buttonText: "Add Reaction",
                  arrayItemName: "Reaction",
                  renderError: renderError,
                  userId: userId,
                  currentRefs: initialValues.reactions,
                  techId: techId,
                  techName: initialValues.name,
                  classStyle: "input-group-sm input-group mb-1 pr-2"
                }}
              />
            </>
          }
          <FieldArray
            name="resources"
            component={ TechniqueFieldArray }
            props={{
              arrayName: "Resources",
              buttonText: "Add Resource",
              arrayItemName: "Resource",
              renderError: renderError,
              normalize: capitalizeFirstLetter
            }}
          />

          <small
            className="pt-4 pb-4"
          >
            ** Accepts Video URLs from Youtube, Facebook, Vimeo, Streamable, Twitch, SoundCloud, Wistia, Mixcloud, and DailyMotion
          </small>

          <div className="d-flex justify-content-center">
            <div
              className="pr-4 mb-4 mt-4"
              onClick={ (e) => e.stopPropagation() }
            >
              <BackButton text="Cancel" />
            </div>
            <button
              className="btn btn-success shadow-lg mb-4 mt-4">
              Submit Technique
            </button>
          </div>
        </form>
        
      </div>
    )
  }
}

function mapStateToProps( state ){
  return{
    errors: state.errors,
    userId: state.currentUser.user.id,
    techRefs: state.techniqueRefs
  };
}

const wrappedForm = reduxForm({
  form: 'techniqueForm',
  validate: validateTechs,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
  destroyOnUnmount: false
})( TechniqueForm );

export default connect( mapStateToProps )( wrappedForm );