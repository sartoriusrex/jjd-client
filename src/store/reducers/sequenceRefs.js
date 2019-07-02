import { ADD_SEQUENCE, REMOVE_SEQUENCE } from "../actions/actionTypes";

const INITIAL_STATE = {
  name: "",
  description: "",
  techniques: [],
  notes: [],
  thumbnail: "",
  edit: false,
  id: ""
}

const sequenceRefs = ( state = INITIAL_STATE, action ) => {
  switch( action.type ) {
    case ADD_SEQUENCE:
      return { ...state, ...action.sequence }
    case REMOVE_SEQUENCE:
      return { 
        name: "",
        description: "",
        techniques: [],
        notes: [],
        thumbnail: "",
        edit: false,
        id: ""
       }
    default:
      return { ...state }
  }
}

export default sequenceRefs;