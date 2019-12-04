import React from 'react';
import { shallow } from 'enzyme';
import Spiner from './spiner';

describe('<Spiner />', () => {
  test('renders', () => {
    const wrapper = shallow(<Spiner />);
    expect(wrapper).toMatchSnapshot();
  });
});
