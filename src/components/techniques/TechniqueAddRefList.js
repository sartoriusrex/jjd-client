import React from "react";
import { connect } from "react-redux";

import { fetchTechniques } from "../../store/actions/techniques";
import TechniqueAddRefListItem from "./TechniqueAddRefListItem";


class TechniqueAddRefList extends React.Component {
  componentDidMount() {
    const { fetchTechniques } = this.props;
    let query;

    fetchTechniques( query );
  }

  render(){
    const { techniques } = this.props;

    let techniqueList = techniques.map( techs => (
      <TechniqueAddRefListItem
        key={techs._id}
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
    ));

    return (
      <ul className="list-group list-group-flush w-100" id="techniques-list">
        { techniqueList }
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