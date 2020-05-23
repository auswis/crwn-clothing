import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// Import the Redux Middelware
const middelwares = [logger];

// Redux Store
// Durch ... wird das Array geteilt und übergeben
export const store = createStore(rootReducer, applyMiddleware(...middelwares));

export const persistor = persistStore(store);

// Export oben nicht nötig, da hier schon beide ausgegeben.
export default { store, persistor };
