import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_TECHNIQUES, REMOVE_TECHNIQUES, EDIT_TECHNIQUE, CREATE_TECHNIQUE, SHOW_TECHNIQUE } from "./actionTypes";
import history from '../../history';
import { reset } from 'redux-form';

//Load all techniques

export const loadTechniques = techniques => ({
  type: LOAD_TECHNIQUES,
  techniques
});

export const fetchTechniques = searchTerm => dispatch => (
  apiCall(
    "get",
    "/api/techniques",
    { params: { search: searchTerm } }
  )
  .then( res => {
    dispatch( loadTechniques( res ) )
  })
  .catch( err => {
    dispatch( addError( err.message ) ) }
  )
);

export const fetchTechniquesByMe = array => ( dispatch, getState ) => {
  let { currentUser } = getState();
  let id = currentUser.user.id;

  return (
    apiCall(
      "get",
      `/api/users/${ id }/techniques/`,
      { params: { array: array }}
    )
    .then( res => {
      dispatch( loadTechniques( res ) )
    })
    .catch( err => {
      dispatch( addError( err.message ) ) 
    })
  );
};

//Create one Technique

export const createTech = technique => ({
  type: CREATE_TECHNIQUE,
  technique
});

export const createTechnique = technique => ( dispatch, getState ) => {
  let { currentUser } = getState();

  let id =            currentUser.user.id;
  let name =          technique.name;
  let type =          technique.type;
  let positionMajor = technique.positionMajor;
  let positionMinor = technique.positionMinor;
  let mode =          technique.mode;
  let description =   technique.description;
  let video =         technique.video
  let steps =         technique.steps;
  let notes =         technique.notes;
  let thumbnail;

  if ( video && video.includes("youtube") ) {
    let videoId = video.slice( video.indexOf("=") + 1 , video.indexOf("=") + 12 )

    thumbnail = `https://img.youtube.com/vi/${ videoId }/1.jpg`
  };

  return(
    apiCall(
      "post",
      `/api/users/${ id }/techniques`,
      { name, type, positionMajor, positionMinor, mode, description, video, thumbnail, steps, notes }
    )
    .then( res => {
      dispatch( createTech( res ));
      dispatch( reset( 'sequenceForm'));
      history.push(`/techniques/${ res._id }`);
    })
    .catch( err => {
      dispatch( addError( err.message ) )
    })
  )
};

//Edit a Technique

export const editTech = technique => ({
  type: EDIT_TECHNIQUE,
  technique
});

export const editTechnique = ( techid, formValues, to ) => ( dispatch, getState ) => {

  let { currentUser } = getState();

  let userid =        currentUser.user.id;
  let name =          formValues.name;
  let type =          formValues.type;
  let positionMajor = formValues.positionMajor;
  let positionMinor = formValues.positionMinor;
  let mode =          formValues.mode;
  let description =   formValues.description;
  let video =         formValues.video;
  let steps =         formValues.steps;
  let notes =         formValues.notes;
  let entries =       formValues.entries;
  let reactions =     formValues.reactions;
  let resources =     formValues.resources;
  let thumbnail;

  if ( video && video.includes("youtube") ) {
    let videoId = video.slice( video.indexOf("=") + 1 , video.indexOf("=") + 12 )

    thumbnail = `https://img.youtube.com/vi/${ videoId }/1.jpg`
  };

  return(
    apiCall(
      "patch",
      `/api/users/${ userid }/techniques/${ techid }`,
      { name, type, positionMajor, positionMinor, mode, description, video, thumbnail, steps, notes, entries, reactions, resources }
    )
    .then( res => {
      dispatch( editTech( res ));
      dispatch( reset( 'sequenceForm'));

      if( to ) {
        history.push( to );
      } else {
        history.push(`/techniques/${ res._id }`)
      }
    })
    .catch( err => {
      dispatch( addError( err.message ) );
    })
  )
};

//Show one technique

export const showTech = technique => ({
  type: SHOW_TECHNIQUE,
  technique
});

export const showTechnique = technique => dispatch => (
  apiCall("get", `/api/techniques/${ technique }`)
  .then( res => {
    dispatch( showTech( res ));
  })
  .catch( err => {
    dispatch( addError( err.message ) );
  })
);

//Delete a Technique

export const remove = id => ({
  type: REMOVE_TECHNIQUES,
  id
});

export const removeTechnique = ( user_id, technique_id ) => dispatch => (
  apiCall(
    "delete",
    `/api/users/${ user_id }/techniques/${ technique_id }`
  )
  .then( () => {
    dispatch( remove( technique_id ) );
    history.push( '/techniques/all' );
  })
  .catch( err => dispatch( addError( err.message ) ) )
);