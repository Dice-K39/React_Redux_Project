import{ createStore, applyMiddleware, compose, combineReducers } from "redux";
/*
    createStore - creates a Redux store that holds the complete state tree of an app. (reducer, preloadedState, enhancer)
    applyMiddleware - applies middleware, which is the suggested method of extending Redux with custom functionality.
    compose - able to apply several store enhancers.
    combineReducers - helper function that turns an object whose values are different reducing functions into a single reducing function that can be passed to createStore.
*/
import thunk from "redux-thunk"; // middleware that allows functions to be returned rather than just actions in Redux. Allows delayed actions such as working with promises.
import logger from "redux-logger"; // logs every action and state change in the dev console.

// reducers
import { authReducer } from "./reducers/authReducer"; // authentication reducer
import { searchResultReducer } from "./reducers/searchResultReducer"; // search results reducer
import { favoritesReducer } from "./reducers/favoritesReducer"; // favorites list reducer

const allReducers = combineReducers(
    {
        auth: authReducer,
        search: searchResultReducer,
        favorites: favoritesReducer
    });

export const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)