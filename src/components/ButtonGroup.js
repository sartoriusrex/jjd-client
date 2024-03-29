import React from 'react';
import { connect } from 'react-redux';

import ButtonGroupAddButton from './ButtonGroupAddButton';
import ButtonGroupHeartButtons from './ButtonGroupHeartButtons';
import ButtonGroupAuthorizedActionButtons from './ButtonGroupAuthorizedActionButtons';
import { ReactComponent as DotMenu } from '../icons/button_menu_vertical_dots.svg';
import ShareItem from './ShareItem';
import "./ButtonGroup.css"

import { isTechLiked, isSeqLiked, handleTechLike, handleSeqLike, handleSeq } from './ButtonGroupFunctions';

import { updateLikes, updateShareState } from '../store/actions/auth';
import { addToSeq } from '../store/actions/sequenceRefs';


class ButtonGroup extends React.Component{
  render() {
    const { 
      seqId, 
      techId, 
      techName, 
      seqName, 
      techThumb, 
      likedTechs,
      likedSeqs, 
      userId, 
      isCorrectUser, 
      sequenceRefs, 
      addToSeq, 
      updateLikes,
      updateShareState,
      shareState,
      dropdownStyle="btn-group-vertical dropleft" } = this.props;

    const techsInSeq = sequenceRefs.techniques;

    return(
      <div className={ dropdownStyle }>

        {
          // Render hearts based on if seqlist or techlist is rendering buttongroup, as well as handling the like
          !seqId ?
          <ButtonGroupHeartButtons
            handleLike={ handleTechLike }
            likedItems={ likedTechs }
            likedId={ techId }
            updateLikeFunction={ updateLikes }
            isLikedFunction={ isTechLiked }
          />
          :
          // This is for the sequences
          <ButtonGroupHeartButtons
            handleLike={ handleSeqLike }
            likedItems={ likedSeqs }
            likedId={ seqId }
            updateLikeFunction={ updateLikes }
            isLikedFunction={ isSeqLiked }
          />
        }
        
        { //SequenceItems do not have a plus button functionality
          !seqId &&
          <ButtonGroupAddButton
            handleSeq={ handleSeq }
            techId={ techId }
            techName={ techName }
            techThumb={ techThumb }
            sequenceRefs={ sequenceRefs }
            addToSeq={ addToSeq }
            techsInSeq={ techsInSeq }
          />
        }

        <button type="button" className="btn btn-light border-0 bg-transparent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <DotMenu
            width="15px" 
            height="15px"
            className="path-color"
          />
        </button>

        <div className="dropdown-menu dropdown-menu-right bg-secondary border border-secondary">

          { 
            // First, must be correct user
            // Second, if seqlist is rendering, then have links and id match seq, otehrwise for techs
            isCorrectUser && (
              !seqId ?
              <ButtonGroupAuthorizedActionButtons
                userId={ userId }
                itemId={ techId }
                item="techniques"
              />
              :
              <ButtonGroupAuthorizedActionButtons
                userId={ userId }
                itemId={ seqId }
                item="sequences"
              />
            )
          }
          <button
            className="dropdown-item border-0 text-light"
            onClick={ () => 
              updateShareState({ 
                techId, 
                seqId, 
                techName, 
                seqName, 
                action: "share"
              })
            }
          >
            Share
          </button>
        </div>
        { 
          ( 
            ( shareState.techName && shareState.techId === techId ) ||
            ( shareState.seqName && shareState.seqId === seqId )
          )
          && <ShareItem />
        }
      </div>
    )
  }
}

function mapStateToProps( state ){
  return {
    likedTechs: state.currentUser.user.likedTechs,
    likedSeqs: state.currentUser.user.likedSeqs,
    userId: state.currentUser.user.id,
    isAuthenticated: state.currentUser.isAuthenticated,
    sequenceRefs: state.sequenceRefs,
    shareState: state.shareState,
  };
}

export default connect( mapStateToProps, { updateLikes, addToSeq, updateShareState } )( ButtonGroup );