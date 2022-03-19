import './index.css';
import { Store, applyMiddleware, createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './store/reducer';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

const store: Store<AppState, AppAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
