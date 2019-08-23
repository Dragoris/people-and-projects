import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import rootReducer from '.';

const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(thunk));
export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);