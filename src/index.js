import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import api from '../src/middleware/api';
import multi from 'redux-multi';
import {fetchPizzaGroup} from '../src/actions/fetch_pizza_menu_action';


import App from './components/app';
import reducers from './reducers';

//const createStoreWithMiddleware = composeWithDevTools( applyMiddleware()(createStore));

//const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(multi, ReduxThunk, api)
  // other store enhancers if any
));
store.dispatch(fetchPizzaGroup());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
