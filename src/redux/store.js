import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware( ...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const exports = { store, persistStore};

export default exports;