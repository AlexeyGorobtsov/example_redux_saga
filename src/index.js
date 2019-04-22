import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import reducer from './redusers/reduser';
import { View } from './containers/timer'
import runTimer from './sagas/saga'

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger)(createStore);
const store = createStoreWithMiddleware(reducer);

sagaMiddleware.run(runTimer);

render(
    <Provider store={store}>
        <View />
    </Provider>,
    document.getElementById('root')
);