import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import myFirstReducer from "./update/update.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["login"],
};

const rootReducer = combineReducers ({
    sensorAllData: myFirstReducer
});

export default persistReducer(persistConfig, rootReducer);