/*
 * Import config store by react
 * **************************** */ 
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */ 
import {WeatherReducer} from "./reducers/WeatherReducer";
import {FavoriteReducer} from "./reducers/FavoriteReducer";

/*
 * Centralisation du store (root reducers)
 * *************************************** */ 
const rootReducer = combineReducers({
    weather: WeatherReducer,
    favorite: FavoriteReducer,
});

/*
 * Export du store
 * *************** */ 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); //Dev
// export const store = createStore(rootReducer); //prod