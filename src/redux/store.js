import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// Import the Redux Middelware
const middelwares = [logger];

// Redux Store
// Durch ... wird das Array geteilt und übergeben
const store = createStore(rootReducer, applyMiddleware(...middelwares));

export default store;
