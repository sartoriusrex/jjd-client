import { LOAD_TECHNIQUES, REMOVE_TECHNIQUES, CREATE_TECHNIQUE, EDIT_TECHNIQUE, SHOW_TECHNIQUE } from "../actions/actionTypes";

const techniques = ( state = [], action ) => {
  switch( action.type ){
    case LOAD_TECHNIQUES:
      let techs = action.techniques; 

      let uniqueTechniques = 
        // Create a new Set and pass in unique _ids by mapping through techniques
        // Turn new set back into Array
        // Map through array of unique _ids and return new array of only the first objects whose _ids matched the array of unique _ids
        Array.from( new Set( techs.map( tech => tech._id)))
          .map( _id => {
            return techs.find( tech => tech._id === _id)
          }
        )

      return [ ...uniqueTechniques ];

    case REMOVE_TECHNIQUES:
      let newState = 
        state.filter( technique => technique._id !== action.id );

      return [...newState]

    case CREATE_TECHNIQUE:
    case EDIT_TECHNIQUE:
    case SHOW_TECHNIQUE:
      return [action.technique];
    default:
      return [...state];
  }
};

export default techniques;