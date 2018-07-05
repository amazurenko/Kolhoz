import { createStore, combineReducers } from 'redux';
import app from "../components/App/Reducer/AppReducer.js";
import options from "../components/Options/Reducer/OptionsReducer.js";
import game from "../components/Game/Reducer/GameReducer.js";

const rootReducer = combineReducers({
    app: app,
    options: options,
    game: game
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;