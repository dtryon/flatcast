import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/flatCast';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
    (createStore);

const store = createStoreWithMiddleware(reducer);
export default store;
