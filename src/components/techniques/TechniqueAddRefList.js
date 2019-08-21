import React from "react";
import { connect } from "react-redux";

import { fetchTechniques } from "../../store/actions/techniques";
import TechniqueAddRefListItem from "./TechniqueAddRefListItem";
import NoResult from '../NoResult';
import ErrorBoundary from '../ErrorBoundary';


class TechniqueAddRefList extends React.Component {
  componentDidMount() {
    const { fetchTechniques, search } = this.props;

    fetchTechniques( search );
  }

  render(){
    const { techniques } = this.props;

    let techniqueList = techniques.map( techs => (
      <ErrorBoundary key={techs._id}>
        <TechniqueAddRefListItem
          id={techs._id}
          username={techs.user.username}
          name={techs.name}
          thumbnail={ techs.thumbnail }
          type={techs.type}
          positionMajor={techs.positionMajor}
          positionMinor={techs.positionMinor}
          mode={techs.mode}
          userId={techs.user._id}
        />
      </ErrorBoundary>
    ));

    return (
      <ul className="list-group list-group-flush w-100" id="techniques-list">
        { 
          techniqueList === 0 ?
          <NoResult /> :
          techniqueList
        }
      </ul>
    )
  }
}

function mapStateToProps( state ){
  return {
    techniques: state.techniques,
    currentUser: state.currentUser.user.id,
    isAuthenticated: state.currentUser.isAuthenticated,
    search: state.search
  };
}

export default connect( mapStateToProps, { fetchTechniques })( TechniqueAddRefList );