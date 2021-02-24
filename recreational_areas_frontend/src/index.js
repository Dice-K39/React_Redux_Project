import React from "react";
import ReactDOM from "react-dom"; // provides DOM-specific methods that can be used at the top level of an app.
import { Provider } from "react-redux"; // Provider makes the Redux store available to any nested components that have been wrapped in the connect() function.

import { store } from "./redux/store";
import "./index.css";
import App from "./App";
import "bulma/css/bulma.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);