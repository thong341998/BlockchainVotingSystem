import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import React from "react";
import { Provider } from "react-redux";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
