import React from 'react';
import { shallow } from 'enzyme';
import UseRef from '../../components/useRef/UseRef';
describe('Test at UseRef', () => {
  const wrapper = shallow(<UseRef />);
  test('should ', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('CustomHooks').exists()).toBe(false);
  });
  test('should  show CustomHooks', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('CustomHooks').exists()).toBe(true);
  });
});
