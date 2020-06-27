import React from 'react';
import AppBar from '../../src/components/AppBar';
import {shallow} from 'enzyme';

describe('AppBar', () => {
  it('renders correctly', () => {
    const wrapped = shallow(<AppBar />);
    expect(wrapped.length).toEqual(1);
  });
});

