// auth reducer - to check if user is logged in or not
import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER: {
      return action.payLoad || false;
    }
    default:
      // no clue if user is logged in or not (null)
      return state;
  }
}
