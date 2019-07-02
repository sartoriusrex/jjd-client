import React from 'react';
import { connect } from 'react-redux';

import { editTechnique } from '../../store/actions/techniques';
import { removeRefs } from '../../store/actions/techniqueRefs'
import TechniqueAddRefList from './TechniqueAddRefList';
import SearchForm from '../SearchBar';
import ListTabNav from '../ListTabNav';
import BackButton from '../BackButton';


class TechniqueAddRefPage extends React.Component{

  updateRefs = () => {
    const { name, currentRefs, techId } = this.props.location.state
    // location.state comes from state object passed down from Link, since TechAddRef is rendered directly by Main.js

    const { techRefs, userId, editTechnique, removeRefs } = this.props;
    const to = `/users/${ userId }/techniques/${ techId }/edit`;
    const updatedRefs = [ ...currentRefs, ...techRefs ].filter( entry => entry._id !== techId );

    let formValues = {
      [ name ]: updatedRefs
    }

    removeRefs();

    // formValues is an object that editTechnique expects to receive, and updatedEntries is array of techniques

    editTechnique( techId, formValues, to );
  }

  render(){
    const { arrayName, arrayItemName, currentRefs, techName } = this.props.location.state;
    // location.state comes from state object passed down from Link, since TechAddRef is rendered directly by Main.js

    return(
      <>
        <div className="container-fluid d-flex flex-column align-items-center">
          <h2 className="text-center w-100 pb-0">Current { arrayName } To</h2>
          <h2 className="text-center w-100 pb-2">{`${ techName }`}</h2>
        </div>

        <ul
          className="list-group list-group-flush p-0 m-0 pb-4 w-100"
        >
          { 
            ( currentRefs.length === 0 ) ?
            <p className="d-flex justify-content-center">No { arrayName }</p>
            :
            <>
            {
              currentRefs.map( ( ref, index, currentEntries ) => 
                <li
                  key={ index }
                  className="list-group-item d-flex justify-content-between align-items-baseline"
                >
                  { ref.name } from { ref.positionMinor } of { ref.positionMajor }
                </li>
              )
            }
            </>
          }
        </ul>

        <h4 className="w-100 text-center border-top border-dark pb-4 pt-4">{`Add ${ arrayItemName }`}</h4>

        <div className="w-100 pb-2 d-flex justify-content-between flex-nowrap">
          <SearchForm to="Techniques" />
          <div className="w-25 d-flex justify-content-between pb-4">
            <button
              className="btn btn-primary"
              onClick={ this.updateRefs }
            >
              Done
            </button>
            <BackButton
              text="Cancel"
            />
          </div>
        </div>

        <ListTabNav />
        <TechniqueAddRefList />
      </>
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

export default connect( mapStateToProps, { editTechnique, removeRefs } )( TechniqueAddRefPage );