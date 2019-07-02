import { ADD_REF, REMOVE_REF, REMOVE_REFS } from "../actions/actionTypes";

const techniqueRefs = ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_REF:

      let newStateAdd = [ ...state ]

      // Does the techRef already exist in the array? If so, remove it (second click on checkbox), otherwise add it (first click)

      // map through array of objects and return array of ids, and find the index of that array that corresponds with ref._id. If not found, push ref to array of objects, if found, remove it

      let indexOfId = newStateAdd
        .map( array => array._id )
        .indexOf( action.ref._id )

      indexOfId === -1 ? 
      newStateAdd.push( action.ref ) : 
      newStateAdd.splice( indexOfId , 1 )

      return [ ...newStateAdd ]
    case REMOVE_REF:

      let newState = state.filter( technique => technique !== action.ref );

      return [ ...newState ]
    case REMOVE_REFS:
      return []
    default:
        return [...state ]; 
  }
}

export default techniqueRefs;