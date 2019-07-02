import { LOAD_SEQUENCES, REMOVE_SEQUENCES, CREATE_SEQUENCE, EDIT_SEQUENCE, SHOW_SEQUENCE } from "../actions/actionTypes";

const sequences = ( state = [], action ) => {
  switch( action.type ){
    case LOAD_SEQUENCES:
      let seqs = action.sequences; 

      let uniqueSequences = 
        // Map through sequences and return new array of sequence ids, then pass that off to a new set, which only accepts unique values (in this case, ids). Then convert that set back to an array.
        // Map through the array of unique _ids and return new array of only the first objects whose _ids matched the array of unique _ids
        Array.from( new Set( seqs.map( seq => seq._id)))
          .map( _id => {
            return seqs.find( seq => seq._id === _id)
          }
        )

      return [ ...uniqueSequences ];

    case REMOVE_SEQUENCES:
      let newState = state.filter( sequence => sequence._id !== action.id );

      return [...newState]

    case CREATE_SEQUENCE:
    case EDIT_SEQUENCE:
    case SHOW_SEQUENCE:
      return [action.sequence];
    default:
      return [...state];
  }
};

export default sequences;