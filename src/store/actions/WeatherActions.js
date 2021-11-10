/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types {...}
 * ****************** */
import {
  GET_WEATHER_DATA,
  GET_WEATHERSWEEK_DATA,
} from "./ActionTypes.js";

/*
 * Actions
 * ******* */

// Get Weather
export const getWeather = (country) => {
  return (dispatch) => {
    return axios
      .get("http://api.openweathermap.org/data/2.5/weather?", {
        params: {
          q: country,
          units: "metric",
          lang: "fr",
          appid: "32ee58ebca536764e3cda83854a4fe6e",
        },
      })
      .then((res) => {
        dispatch({ type: GET_WEATHER_DATA, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Get WeathersWeek
export const getWeathersWeek = (country) => {
  return (dispatch) => {
    return axios
      .get("https://api.openweathermap.org/data/2.5/forecast/?", {
        params: {
          q: country,
          units: "metric",
          lang: "fr",
          appid: "32ee58ebca536764e3cda83854a4fe6e",
        },
      })
      .then((res) => {
        dispatch({ type: GET_WEATHERSWEEK_DATA, payload: res.data.list });
      })
      .catch((err) => console.log(err));
  };
};
