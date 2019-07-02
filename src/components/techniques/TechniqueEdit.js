import React from 'react';
import { connect } from "react-redux";

import { showTechnique, editTechnique } from '../../store/actions/techniques';
import TechniqueForm from './TechniqueForm';
import LoadSpinner from '../LoadSpinner';


class TechniqueEdit extends React.Component {
  componentDidMount(){
    this.props.showTechnique( this.props.match.params.techid );
  }

  onSubmit = formValues => {
    this.props.editTechnique(
      this.props.match.params.techid,
      formValues 
    );
  }

  render(){

    if( !this.props.techniques ) {
      return (
        <LoadSpinner />
      )
    }

    return (
      <TechniqueForm
        pageTitle="Edit Technique"
        initialValues={ this.props.techniques }
        onSubmit={ this.onSubmit }
        techId={ this.props.match.params.techid }
      />
    );
  }
}

const mapStateToProps = ( state, ownProps ) => {
  // Match Technique found in state to technique found in the URL Params (techid)

  let techsArr = state.techniques;
  let techid = ownProps.match.params.techid;

  function findIt( array, id ){
    return array.filter( el => el._id === id )
  }

  let fndTech = findIt( techsArr, techid)

  // Match state with found element;

  return {
    techniques: fndTech[0],
  }
}

export default connect( mapStateToProps, { showTechnique, editTechnique })( TechniqueEdit );