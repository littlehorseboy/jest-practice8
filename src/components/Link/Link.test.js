import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Link from './Link.jsx';

describe('Link.jsx instance trigger', () => {
  test('Link changes the class when hovered', () => {
    const component = shallow(
      <Link></Link>,
    );

    expect(toJSON(component)).toMatchSnapshot();

    component.instance().mouseEnter();

    expect(toJSON(component)).toMatchSnapshot();

    component.instance().mouseLeave();

    expect(toJSON(component)).toMatchSnapshot();
  });
});

describe('Link.jsx find <a> simulate', () => {
  test('Link changes the class when hovered', () => {
    const component = shallow(
      <Link></Link>,
    );

    expect(toJSON(component)).toMatchSnapshot();

    component.find('a').simulate('mouseenter');

    expect(toJSON(component)).toMatchSnapshot();

    component.find('a').simulate('mouseleave');

    expect(toJSON(component)).toMatchSnapshot();
  });
});
