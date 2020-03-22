import axios from "axios";
import rootReducer from "./rootReducer";
import logic from "./rootLogic";

import { createStore, applyMiddleware } from "redux";
import { createLogicMiddleware } from "redux-logic";

const deps = { httpClient: axios };
const logicMiddleware = createLogicMiddleware(logic, deps);

const configureStore = () => createStore(rootReducer, applyMiddleware(logicMiddleware));

export default configureStore;
