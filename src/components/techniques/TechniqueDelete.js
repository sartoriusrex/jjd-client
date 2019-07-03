import React from 'react';
import { connect } from "react-redux";

import LoadSpinner from '../LoadSpinner';
import Delete from '../Delete';
import { showTechnique, removeTechnique } from '../../store/actions/techniques';


class TechniqueDelete extends React.Component {
  
  componentDidMount(){
    this.props.showTechnique( this.props.match.params.techid );
  }

  render(){
    const { userid, techid } = this.props.match.params;
    const { removeTechnique, techniques } = this.props;

    if ( !techniques ){
      return <LoadSpinner />
    }

    return (
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
        <Delete
          item="Technique"
          actionHandler={ removeTechnique }
          userid={ userid }
          itemid={ techid }
        />
      </div>
    );
  }
}

const mapStateToProps = ( state, ownProps ) => {
  // Match Technique found in state to technique found in the URL Params (techid)

  let techsArr = state.techniques;
  let techsid = ownProps.match.params.techsid;
  let _id;

  // Loop through array of techniques in state and return the element in the array with the property that matches the value we pass in (key _id with value techsid)) Return null if not found

  function findElement( arr, propName, propValue ) {
    for ( var i=0; i < arr.length; i++ )
      if ( arr[i][propName] === propValue )
        return arr[i];
  
    return null;
  }

  // Call function with params passed in

  const tech = findElement( techsArr, _id, techsid )

  // Match state with found element;

  return { techniques: tech }
}

export default connect( mapStateToProps, { showTechnique, removeTechnique })( TechniqueDelete );