import React from 'react';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="hhh1">Big Title</h1>
        <p className="describe">describe</p>
      </div>
    );
  }
}

export default Header;
