import React from 'react';
import { connect } from 'react-redux';
import { fetchTechniques, fetchTechniquesByMe } from "../store/actions/techniques";
import { fetchSequences, fetchSequencesByMe } from "../store/actions/sequences";


class ListTabNav extends React.Component {
  state = {
    active: "all"
  }

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

  updateActiveState = ( button ) => {
    this.setState({ active: button })
  }

  render(){
    const { isAuthenticated, user } = this.props.currentUser;
    const { to } = this.props;
    let classActive = "btn border-bottom";
    let classInactive = "btn";
    let barClassStyle = "btn-group w-100 d-flex justify-content-center mb-2";

    if( to === "Sequence" ){
      barClassStyle = "btn-group w-100 d-flex justify-content-center mb-2 border-info";
    }

    return(
      <div className={ barClassStyle }>

        <button 
          className={ this.state.active === "all" ? classActive : classInactive }
          onClick={ () => { 
            this.updateActiveState('all');
            this.fetchAll() 
          } }
        >
          All
        </button>

        {
          isAuthenticated &&
          <>
            <button 
              className={ this.state.active === "own" ? classActive : classInactive }
              onClick={ () => {
                this.updateActiveState("own");
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
              className={ this.state.active === "liked" ? classActive : classInactive }
              onClick={ () => {
                this.updateActiveState("liked");
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