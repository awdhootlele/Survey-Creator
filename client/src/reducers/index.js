// main point of all the reducers - all reducers are combined here

import { combineReducers } from 'redux';
import authReducer from './authReducer';
// object key names should bew same as of the key names in the state
export default combineReducers({
  auth: authReducer // state.auth
});
