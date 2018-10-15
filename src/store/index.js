import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { Reducers } from '../reducers';

export default function configureStore(initialState){

    const middlewares =[
        thunkMiddleware
    ];

    const store = createStore(Reducers, initialState, compose(
       applyMiddleware(...middlewares),
       window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    ));

    return store;

}
