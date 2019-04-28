import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel.jsx';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input[type="checkbox"]').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
