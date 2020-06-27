/**
 * @format
 */

// import 'react-native';
// import React from
import React from 'react';
import Home from '../../src/views/Home';
import {shallow} from 'enzyme';

describe('Home', () => {
  it('renders correctly', () => {
    const wrapped = shallow(<Home />);
    expect(wrapped.length).toEqual(1);
  });
});

