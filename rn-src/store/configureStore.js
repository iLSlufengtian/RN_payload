import { applyMiddleware,createStore } from 'redux'
import { persistStore, persistReducer,persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import rootReducer from "../reducers/index";
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    // applyMiddleware(thunk,logger),
    applyMiddleware(thunk),
);
const persistor =  persistStore(store);

export default {store,persistor};