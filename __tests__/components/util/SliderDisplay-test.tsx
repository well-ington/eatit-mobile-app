import React from 'react';
import SliderDisplay from '../../../src/components/util/SliderDisplay';
import {shallow} from 'enzyme';

describe('SliderDisplay', () => {
  it('renders correctly', () => {
    const wrapped = shallow(<SliderDisplay />);
    expect(wrapped.length).toEqual(1);
  });
});

