import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VideoPlayer from '../VideoPlayer';

import { showTechnique } from '../../store/actions/techniques';
import LoadSpinner from '../LoadSpinner';
import SearchForm from '../SearchBar';
import BackButton from '../BackButton';
import Accordion from '../Accordion';
import ButtonGroup from '../ButtonGroup';


class TechniqueShow extends React.Component {

  componentDidMount(){
    this.props.showTechnique( this.props.match.params.techid )
  }

  renderArray = ( array, arrayItemTitle ) => {
    return(
      <ul className="list-group bg-transparent">
      { array.map( ( item, index ) => (
        <li 
          key={ index }
          className="list-group-item border-0 p-0 pl-2 pt-2 pb-2 bg-transparent font-weight-light"
        >
          {`${ arrayItemTitle } ${ index + 1 }: `}{ item }
        </li>
      ))}
    </ul>
    )
  }

  renderArrayWithLink = ( array, arrayItemTitle ) => {
    return(
      <ul className="list-group bg-transparent">
      { array.map( ( item, index ) => (
        <li 
          key={ index }
          className="list-group-item border-0 p-0 pl-2 pt-2 pb-2 bg-transparent font-weight-light"
        >
          {`${ arrayItemTitle } ${ index + 1 }: `}
          <Link
            to={`/techniques/${ item._id }`}
          >
            { item.name }
          </Link>
        </li>
      ))}
    </ul>
    )
  }

  renderAccordions = () => {
    const { steps, notes, entries, reactions, resources } = this.props.techniques;

    let techPropArray = [
      {
        buttonText: "Steps",
        id: "theSteps", 
        arrayItemTitle:"Step", 
        array: steps,
        renderArray: this.renderArray
      },
      {
        buttonText: "Notes",
        id: "theNotes", 
        arrayItemTitle:"Note", 
        array: notes,
        renderArray: this.renderArray
      },
      {
        buttonText: "Entries",
        id: "theEntries", 
        arrayItemTitle:"Entry", 
        array: entries,
        renderArray: this.renderArrayWithLink,
      },
      {
        buttonText: "Reactions",
        id: "theReactions", 
        arrayItemTitle:"Reaction", 
        array: reactions,
        renderArray: this.renderArrayWithLink
      },
      {
        buttonText: "Resources",
        id: "theResources", 
        arrayItemTitle:"Resource", 
        array: resources,
        renderArray: this.renderArray
      },
    ];

    const techProps = techPropArray.map( ( array ) => (
        <Accordion
          key={ array.buttonText }
          buttonText={ array.buttonText }
          theArray={ array.array }
          renderArray={ array.renderArray }
          id={ array.id }
          arrayItemTitle={ array.arrayItemTitle }
        />
    ));
    
    return techProps;
  }

  render(){

    if( !this.props.techniques ) {
      this.props.showTechnique( this.props.match.params.techid );

      return(
        <LoadSpinner />
      )
    }

    const { video, name, _id, user, type, positionMajor, positionMinor, mode, description, thumbnail } = this.props.techniques;

    const { isAuthenticated, userId } = this.props;

    return (
      <div className="container main min-vh-100 pt-3 pl-1 pr-1">
      {/* The Back btn and search bar at the top */}
        <div className="d-flex justify-content-between align-items-baseline w-100 mb-4">

          <div className="w-25 d-flex">
            <BackButton />
          </div>

          <SearchForm to="Techniques" go="techs" />

          <div className="w-25">
            { "" }
            {/* This Div is used for formatting purposes only: so that the SearchTechniquesBar can be centered and the back button on the far left */}
          </div>

        </div>

        {/* The body of the show page */}

        {
        // If there is a video, then show the videoplayer, otherwise show nothing
          video &&
          <VideoPlayer url={ video } />
        }

        <div className="d-flex justify-content-between pb-4 pt-4">
          <h5> { name } </h5>

        { 
          isAuthenticated &&

          <ButtonGroup
            dropdownStyle="btn-group"
            techId={ _id }
            isCorrectUser={ userId === user }
            techName={ name }
            techThumb={ thumbnail }
          />
        }
          
        </div>

        <div className="d-flex justify-content-between align-items baseline border-top border-dark pt-1 pb-1">
          <p className="pt-1 mb-0">
            { type }
          </p>
          <p className="pt-1 pr-1 pl-2 mb-0"> 
            { positionMajor }
          </p>
          <p className="pt-1 pr-2 pl-1 mb-0">
            { positionMinor }
          </p>
          <p className="pt-1 mb-0">
            { mode }
          </p>
        </div>

        {/* If there is a description, show it, otherwise show nothing */}

        { 
          description &&
          <div className="d-flex justify-content-center align-items-center border-top border-dark pt-2 pb-2">
            <small className="p-0 pt-1">
              { description }
            </small>
          </div>
        }

        { this.renderAccordions() }

        <div className="p-4">
          {/* This is for spacing layout purposes only */}
        </div>
      </div>
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
    userId: state.currentUser.user.id,
    isAuthenticated: state.currentUser.isAuthenticated
  }
}

export default connect( mapStateToProps, { showTechnique })( TechniqueShow );