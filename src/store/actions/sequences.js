import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_SEQUENCES, REMOVE_SEQUENCE, EDIT_SEQUENCE, CREATE_SEQUENCE, SHOW_SEQUENCE } from "./actionTypes";
import history from '../../history';

//Load all sequences

export const loadSequences = sequences => ({
  type: LOAD_SEQUENCES,
  sequences
});

export const fetchSequences = searchTerm => dispatch => (
  apiCall(
    "get",
    "/api/sequences",
    { params: { search: searchTerm } }
  )
  .then( res => {
    dispatch( loadSequences( res ) )
  })
  .catch( err => {
    dispatch( addError( err.message ) )
  })
);

export const fetchSequencesByMe = array => ( dispatch, getState ) => {
  let { currentUser } = getState();
  let id = currentUser.user.id;

  return (
    apiCall(
      "get",
      `/api/users/${ id }/sequences/`,
      { params: { array: array }}
    )
    .then( res => {
      dispatch( loadSequences( res ) )
    })
    .catch( err => {
      dispatch( addError( err.message ) ) 
    })
  );
};

//Create one Sequence

export const createSeq = sequence => ({
  type: CREATE_SEQUENCE,
  sequence
});

export const createSequence = sequence => ( dispatch, getState ) => {
  let { currentUser } = getState();
  let id =            currentUser.user.id;
  let name =          sequence.name;
  let description =   sequence.description;
  let techniques =    sequence.techniques.map( tech => tech._id ); //send over to api only array of technique ids and not the entire objects;
  let notes =         sequence.notes;
  let thumbnail;
  
  // Grab thumbnail from one the first technique in the array that has one defined and break, otherwise set to undefined

  for ( let i = 0; i < techniques.length; i++ ){
    if( techniques[i].thumbnail ) {
      thumbnail = techniques[i].thumbnail
      break;
    }
  };

  return(
    apiCall(
      "post",
      `/api/users/${ id }/sequences`,
      { name, description, techniques, thumbnail, notes }
    )
    .then( res => {
      dispatch( createSeq( res ) );
      history.push( `/sequences/${ res._id }` );
    })
    .catch( err => {
      dispatch( addError( err.message ) )
    })
  )
};

//Edit a Sequence

export const editSeq = sequence => ({
  type: EDIT_SEQUENCE,
  sequence
});

export const editSequence = ( sequenceid, formValues, to ) => ( dispatch, getState ) => {
  let { currentUser } = getState();
  let id =            currentUser.user.id;
  let name =          formValues.name;
  let description =   formValues.description;
  let techniques =    formValues.techniques.map( tech => tech._id ); //send over to api only array of technique ids and not the entire objects;
  let notes =         formValues.notes;
  let thumbnail;
  
  // Grab thumbnail from one the first technique in the array that has one defined and break, otherwise set to undefined

  for ( let i = 0; i < techniques.length; i++ ){
    if( techniques[i].thumbnail ) {
      thumbnail = techniques[i].thumbnail
      break;
    }
  };

  return(
    apiCall(
      "patch",
      `/api/users/${ id }/sequences/${ sequenceid }`,
      { name, description, thumbnail, notes, techniques }
    )
    .then( res => {
      dispatch( editSeq( res ) );

      if( to ) {
        history.push( to );
      } else {
        history.push( `/sequences/${ res._id }` )
      }
    })
    .catch( err => {
      dispatch( addError( err.message ) );
    })
  )
};

//Show one sequence

export const showSeq = sequence => ({
  type: SHOW_SEQUENCE,
  sequence
});

export const showSequence = sequence => dispatch => (
  apiCall(
    "get",
    `/api/sequences/${ sequence }`
  )
  .then( res => {
    dispatch( showSeq( res ) );
  })
  .catch( err => {
    dispatch( addError( err.message ) );
  })
);

//Delete a Technique

export const remove = id => ({
  type: REMOVE_SEQUENCE,
  id
});

export const removeSequence = ( user_id, sequence_id ) => dispatch => (
  apiCall(
    "delete",
    `/api/users/${ user_id }/sequences/${ sequence_id }`
  )
  .then( () => {
    dispatch( remove( sequence_id ) );
    history.push( '/sequences/all' );
  })
  .catch( err => 
    dispatch( addError( err.message ))
  )
);