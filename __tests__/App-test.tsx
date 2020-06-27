/**
 * @format
 */

// import 'react-native';
// import React from
import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme';

describe('App', () => {
  it('renders correctly', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.length).toEqual(1);
  });
});

