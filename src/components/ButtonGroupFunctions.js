export const handleSeq = ( techId, techName, techThumb, sequenceRefs, addToSeq ) => {

  let seq = {};

  seq.newTechId = techId;
  seq.newTechName = techName;
  seq.techsToAdd = sequenceRefs.techniques;
  seq.newTechThumb = techThumb;
  seq.name = sequenceRefs.name;
  seq.description = sequenceRefs.description;
  seq.notes = sequenceRefs.notes;
  seq.id = sequenceRefs.id;
  seq.edit = sequenceRefs.edit;

  addToSeq( seq );
}

export const handleTechLike = ( likedTechs, techId, updateLikes ) => {
  let newLikes;
  let to = "techs";

  if( likedTechs && likedTechs.includes( techId ) ){
    newLikes = likedTechs.filter( techs => techs !== techId); 
    //if the technique clicked is already liked by user, remove it
  } else if( likedTechs ) {
    newLikes = [ ...likedTechs, techId ] 
    //otherwise add this to the array
  } else {
    newLikes = [ techId ] 
    //the array doesn't exist if it's the first, so create the array with the techid
  }

  updateLikes( newLikes, to ); 
  //send off action to reconcile likes for user
}

export const handleSeqLike = ( likedSeqs, seqId, updateLikes ) => {
  let newLikes;
  let to = "seqs";

  if( likedSeqs && likedSeqs.includes( seqId ) ){
    newLikes = likedSeqs.filter( techs => techs !== seqId ); 
    //if the seq clicked is already liked by user, remove it
  } else if( likedSeqs ) {
    newLikes = [ ...likedSeqs, seqId ] 
    //otherwise add this to the array
  } else {
    newLikes = [ seqId ] 
    //the array doesn't exist if it's the first, so create the array with the seqId
  }

  updateLikes( newLikes, to ); 
  //send off action to reconcile likes for user
}

export const isTechLiked = ( techId, likedTechs ) => {

  if ( likedTechs ) {
    return likedTechs.includes( techId );
  }
  return false;
}

export const isSeqLiked = ( seqId, likedSeqs ) => {

  if ( likedSeqs ) {
    return likedSeqs.includes( seqId );
  }
  return false;
}

export const handleShare = () => {
  
}