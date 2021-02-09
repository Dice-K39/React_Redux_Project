import{ createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { reducer } from "./reducers/reducer";
import { authReducer } from "./reducers/authReducer";

const allReducers = combineReducers(
    {
        example: reducer,
        authentication: authReducer
    });

export const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)