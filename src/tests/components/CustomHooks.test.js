import React from 'react';
import { shallow } from 'enzyme';
import { useFetch } from '../../Hooks/useFetch';
import { useCounter } from '../../Hooks/useCounter';
import CustomHooks from '../../components/useFetch/CustomHooks';
jest.mock('../../Hooks/useFetch');
jest.mock('../../Hooks/useCounter');

describe('Custom Hooks test', () => {
  useCounter.mockReturnValue({
    counter: 1,
    increment: () => {},
  });

  test('should render component correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<CustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show information', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Erick',
          quote: 'Hello world',
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<CustomHooks />);
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hello world');
  });
});
