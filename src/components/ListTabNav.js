import React from 'react';
import { connect } from 'react-redux';
import { fetchTechniques, fetchTechniquesByMe } from "../store/actions/techniques";
import { fetchSequences, fetchSequencesByMe } from "../store/actions/sequences";


class ListTabNav extends React.Component {

  fetchAll = () => {
    let { to, fetchTechniques, fetchSequences } = this.props;

    if( to === "Technique" ) {
      fetchTechniques( "" );
    } else {
      fetchSequences( "" );
    }
  };

  fetchOwn = ( to, array ) => {
    let { fetchTechniquesByMe, fetchSequencesByMe } = this.props;

    if( to === "Technique" ) {
      fetchTechniquesByMe( array );
    } else {
      fetchSequencesByMe( array );
    }
  };

  render(){
    const { isAuthenticated, user } = this.props.currentUser;
    const { to } = this.props;

    let classStyle = "btn-group d-flex justify-content-center mb-2 border-bottom border-primary";

    if( to === "Sequence" ){
      classStyle = "btn-group d-flex justify-content-center mb-2 border-bottom border-info";
    }

    return(
      <div className={ classStyle }>

        <button 
          className="btn"
          onClick={ this.fetchAll }
        >
          All
        </button>

        {
          isAuthenticated &&
          <>
            <button 
              className="btn"
              onClick={ () => {
                if( this.props.to === "Technique" ) {
                  this.fetchOwn( to, user.techniques );
                } else {
                  this.fetchOwn( to, user.sequences );
                } 
              } }
            >
              Created by Me
            </button>

            <button 
              className="btn"
              onClick={ () => {
                if( this.props.to === "Technique" ) {
                  this.fetchOwn( to, user.likedTechs );
                } else {
                  this.fetchOwn( to, user.likedSeqs );
                } 
              } }
            >
              Liked
            </button>
          </>
        }
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return{
    errors: state.errors,
    currentUser: state.currentUser
  }
};

export default connect( mapStateToProps, { fetchTechniques, fetchTechniquesByMe, fetchSequences, fetchSequencesByMe } )( ListTabNav );