import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './router/Router.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Root extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#app'));
