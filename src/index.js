import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import counterReducer from './reducer/CounterReducer';
import ColorReducer from './reducer/ColorReducer';
import { Provider } from 'react-redux';
import { myLogger}  from './middleware/myLogger';
import { myLogger2 } from './middleware/myLogger2';
import logger from 'redux-logger';
import reportWebVitals from './reportWebVitals';
import postReducer from './reducer/postReducer';
import Posts from './component/Posts';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const devTools = composeWithDevTools(applyMiddleware(myLogger, myLogger2))

const store = createStore(ColorReducer, devTools);

//const store = createStore(postReducer, applyMiddleware(thunk));
console.log('Store created');
ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
