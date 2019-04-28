import React from 'react';
import Content from '../../components/Content/Content.jsx';
import Link from '../../components/Link/Link.jsx';
import CheckboxWithLabel from '../../components/CheckboxWithLabel/CheckboxWithLabel.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link>link</Link>
        <Content />
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
      </div>
    );
  }
}

export default Home;
