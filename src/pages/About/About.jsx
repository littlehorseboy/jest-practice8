import React from 'react';
import Content from '../../components/Content/Content.jsx';
import Link from '../../components/Link/Link.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class About extends React.Component {
  render() {
    return (
      <div>
        <Link>link</Link>
        <Content />
      </div>
    );
  }
}

export default About;
