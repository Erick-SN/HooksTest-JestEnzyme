import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../components/HookApp';
describe('HookApp Test', () => {
  test('should render HookApp component', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
