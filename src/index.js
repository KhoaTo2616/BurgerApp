import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import rootReducer from "./store/reducer";
import { createStore } from "redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
