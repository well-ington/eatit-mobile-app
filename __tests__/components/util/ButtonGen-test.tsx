import React from 'react';
import {ButtonGen} from '../../../src/components/util/ButtonGen';
import {shallow} from 'enzyme';

describe('ButtonGen', () => {
  it('renders correctly', () => {
    const wrapped = shallow(<ButtonGen title='test' onPress={() => console.log('the game')} type='primary' />);
    expect(wrapped.length).toEqual(1);
  });
});

