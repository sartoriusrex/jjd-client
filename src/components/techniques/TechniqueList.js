import React from "react";
import { connect } from "react-redux";

import { fetchTechniques } from "../../store/actions/techniques";
import TechniqueListItem from "./TechniqueListItem";
import NoResult from '../NoResult';
import ErrorBoundary from '../ErrorBoundary';


class TechniqueList extends React.Component {

  componentDidMount() {
    const { fetchTechniques, search } = this.props;

    fetchTechniques( search );
  }

  render(){
    const { techniques, currentUser, likedTechs, isAuthenticated } = this.props;

    let techniqueList = techniques.map( techs => {
      return(
        <ErrorBoundary key={ techs._id }>
          <TechniqueListItem
            techId={ techs._id }
            username={ techs.user.username }
            name={ techs.name }
            thumbnail={ techs.thumbnail }
            type={ techs.type }
            positionMajor={ techs.positionMajor }
            positionMinor={ techs.positionMinor }
            mode={ techs.mode }
            description={ techs.description }
            isCorrectUser={ currentUser === techs.user._id }
            isAuthenticated={ isAuthenticated }
            likedTechs={ likedTechs }
          />
        </ErrorBoundary>
      )
    });

    return (
      <ul className="list-group list-group-flush mb-5 pb-5" id="techniques-list">
        { 
          techniqueList.length === 0 ?
          <NoResult />
          :
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
  };
}

export default connect( mapStateToProps, { fetchTechniques })( TechniqueList );