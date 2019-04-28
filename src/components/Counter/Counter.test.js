import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './Counter.jsx';

test('Counter.jsx', () => {
  const props = {
    count: 0,
    addCount: jest.fn(),
  };

  const counter = shallow(<Counter {...props} />);

  counter.find('div').find('button').at(0).simulate('click');
  expect(props.addCount.mock.calls.length).toBe(1);
});
