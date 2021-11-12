/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector = State
 * ******** */
const initialState = {
  data: [],
};

/*
 * Reducers
 * ******** */
// Exporter la fonction ImagesReducer
export function ImagesReducer(state = initialState, action) {
  // Importer le type d'action
  switch (action.type) {
    //   GET_IMAGES_DATA issu de fichier ActionsTypes
    case Actions.GET_IMAGES_DATA:
      return { ...state, data: action.payload };
    // case Actions.GET_POSTS:
    //   return { ...state };
    // case Actions.ADD_POST:
    //   return [action.payload, ...state];
    default:
      // retourner l'état
      return state;
  }
}

/*
 * Getters
 * ******* */
