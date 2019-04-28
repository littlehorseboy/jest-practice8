import React from 'react';
import { shallow, mount } from 'enzyme';
import Counter from './Counter.jsx';

describe('Counter.jsx', () => {
  const counter = shallow(<Counter />);

  test('check initial state', () => {
    expect(counter.state('count')).toBe(0);
    expect(counter.state('name')).toBe('horse');
  });

  test('after click', () => {
    counter.find('div').find('button').simulate('click');
    expect(counter.state('count')).toBe(1);
    expect(counter.find('div').find('span').text()).toBe('horse點了1下');
  });

  test('change value of name', () => {
    expect(counter.find('div').find('input').props().value).toBe('horse');
    // counter.setState({ name: '來亂的' });
    counter.find('div').find('input').simulate('change', { target: { value: '來亂的' } });
    expect(counter.find('div').find('input').props().value).toBe('來亂的');
    expect(counter.find('div').find('span').text()).toBe('來亂的點了1下');
  });

  test('get tag p in Counter component', () => {
    expect(counter.find('Title').shallow().find('p').text()).toBe('計數器');

    const mountCounter = mount(<Counter />);
    expect(mountCounter.find('div').find('p').text()).toBe('計數器');
  });
});
