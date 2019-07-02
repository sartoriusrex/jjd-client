import { ADD_SEQUENCE, REMOVE_SEQUENCE } from "./actionTypes";

export const addSequence = sequence => ({
  type: ADD_SEQUENCE,
  sequence
})

export const addToSeq = ({ 
  newTechId,
  newTechName,
  newTechThumb,
  name,
  description,
  notes,
  thumbnail,
  techsToAdd,
  edit,
  id
}) => dispatch => {
  let newTechnique = {
    _id: newTechId,
    name: newTechName,
    thumbnail: newTechThumb
  };
  let newTechsToAdd;

  if( techsToAdd ) {
    newTechsToAdd = [ ...techsToAdd ] //do not mutate old array - create a new one
  } else {
    newTechsToAdd = []
  };

  // map through array of technique objects in seqRefs and return an array of just their Ids. Search through that array to see if the newTechId is in it. If it isn't, push the new Tech to the newArray. If it is present, remove it from the array.
  if ( newTechId ) {
    let indexOfTech = newTechsToAdd.map( tech => tech._id )
    .indexOf( newTechId ) 
  
    indexOfTech === -1 ?
    newTechsToAdd.push( newTechnique ) :
    newTechsToAdd.splice( indexOfTech , 1 );
  }

  // Create a new array of techniques to pass to reducer
  let techniques = [ ...newTechsToAdd ]

  let sequence = {
    name,
    description,
    techniques,
    notes,
    thumbnail,
    edit,
    id
  }

  dispatch( addSequence( sequence ) );
}

export const removeSequence = sequence => ({
  type: REMOVE_SEQUENCE,
  sequence
})