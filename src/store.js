import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import rootReducers from './reducers/rootrReducers';
import {composeWithDevTools} from 'redux-devtools-extension';
const allEnhancers=composeWithDevTools(applyMiddleware(thunk,promise,logger));
export const store=createStore(rootReducers,allEnhancers);