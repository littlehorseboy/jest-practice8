import React from 'react';
import Counter from '../../components/Counter/Counter.jsx';
import Link from '../../components/Link/Link.jsx';
import CheckboxWithLabel from '../../components/CheckboxWithLabel/CheckboxWithLabel.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link>link</Link>
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
        <Counter />
      </div>
    );
  }
}

export default Home;
