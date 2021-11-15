/*
 * Import Actions {...}
 * ******************** */
import * as Actions from "../actions/ActionTypes.js";

/*
 * Selector
 * ******** */
const initialState = {
  data: {},
  dataWeek: {},
  //Update wil
  dataAll: {},
};

/*
 * Reducers
 * ******** */

export function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_WEATHER_DATA:
      return { ...state, data: action.payload };
    case Actions.GET_WEATHERSWEEK_DATA:
      return { ...state, dataWeek: action.payload };
    //Update wil
    case Actions.GET_APIMETEO_ALL_DATA:
      return { ...state, dataAll: action.payload };
  }
}

/*
 * Getters
 * ******* */
