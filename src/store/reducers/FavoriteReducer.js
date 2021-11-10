/*
 * Import Actions {...}
 * ******************** */
import * as Actions from "../actions/ActionTypes.js";

/*
 * Selector
 * ******** */
const initialState = {
  dataCountry: {},
};

/*
 * Reducers
 * ******** */

export function FavoriteReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_COUNTRY_DATA:
      return { ...state, dataCountry: action.payload };
    case Actions.POST_COUNTRY_DATA:
      return { ...state };
  }
}

/*
 * Getters
 * ******* */
