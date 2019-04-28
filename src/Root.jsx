import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './reducers/configureStore';
import './index.scss';
import Router from './router/Router.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#app'));
