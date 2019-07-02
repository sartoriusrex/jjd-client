import { combineReducers } from "redux";
import { reducer as formReducer} from 'redux-form';

import currentUser from "./currentUser";
import errors from "./errors";
import techniques from "./techniques";
import sequences from "./sequences";
import techniqueRefs from "./techniqueRefs";
import sequenceRefs from "./sequenceRefs";
import messages from "./mail.js";


const rootReducer = combineReducers({
  currentUser,
  errors,
  techniques,
  techniqueRefs,
  sequences,
  sequenceRefs,
  messages,
  form: formReducer
})

export default rootReducer;