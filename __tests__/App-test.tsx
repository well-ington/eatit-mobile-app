/**
 * @format
 */

// import 'react-native';
// import React from
import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';


it('renders correctly', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.length).toEqual(1);
});
