import { createStore } from "redux";
import { loadState, saveState } from "./local-storage";
import { rootReducer } from "./root-reducer";
import throttle from 'lodash/throttle';

export const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    store.subscribe(throttle(() => {
        saveState({
            auth: store.getState().auth,
            user: store.getState().user,
        });
    }, 1000));

    return store;
}