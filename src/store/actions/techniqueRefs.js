import { ADD_REF, REMOVE_REFS, REMOVE_REF } from "./actionTypes";
import { apiCall } from "../../services/api";
import { addError } from "./errors";

export const addRef = ref => ({
  type: ADD_REF,
  ref
});

export const fetchRef = ( ref, userid ) => dispatch => {
  let query;

  if( !ref ){
    query = ""
  } else {
    query = ref;
  }

  return (
    apiCall(
      "get", `/api/users/${ userid }/techniqueRefs`,
      { params: { refs: query } }
    )
    .then( function( res ) {
      dispatch( addRef( res[0] ) )
    })
    .catch( function( err ) {
      dispatch( addError( err.message ) ) }
    )
  );
};

export const removeRefs = () => ({
  type: REMOVE_REFS,
});

export const removeRef = ref => ({
  type: REMOVE_REF,
  ref
});