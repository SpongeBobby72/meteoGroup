/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types {...}
 * ****************** */
import {
  GET_COUNTRY_DATA,
} from "./ActionTypes.js";

/*
 * Actions
 * ******* */
  
  // Get Country
  export const getCountry = () => {
    return (dispatch) => {
      return axios
        .get("http://localhost:3003/favorite")
        .then((res) => {
          // console.log('res favorite', res.data)
          dispatch({ type: GET_COUNTRY_DATA, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
  };
  
  // Post Country
  export const postCountry = (data) => {
    return (dispatch) => {
      return (
        axios
          .post("http://localhost:3003/favorite", data)
          .catch((err) => console.log(err))
      );
    };
  };
  