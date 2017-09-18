import { RECEIVE_WINES, RECEIVE_WINE } from '../actions/wine_actions';
import merge from 'lodash/merge';

const WineReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_WINES:
      const wines = action.wines;
      return wines;
    case RECEIVE_WINE:
      const wine = action.wine;
      const prev_wines = state.dup;
      return merge({}, { wine }, prev_wines);
    default:
      return state;
  }
};

export default WineReducer;