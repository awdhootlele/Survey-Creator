// main point of all the reducers - all reducers are combined here

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
// object key names should bew same as of the key names in the state
export default combineReducers({
  auth: authReducer, // state.auth
  form: formReducer, // key -> form must be 'form', we can change it, but keep it simple
  surveys: surveysReducer
});
