import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.jsx';

describe('Header.jsx', () => {
  const header = shallow(<Header />);

  test('.hhh1 textContent === Big Title', () => {
    expect(header.find('.hhh1').text()).toBe('Big Title');
  });

  test('.describe textContent === describe', () => {
    expect(header.find('.describe').text()).toBe('describe');
  });
});
