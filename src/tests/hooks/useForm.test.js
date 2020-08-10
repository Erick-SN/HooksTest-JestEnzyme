import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../Hooks/useForm';
describe('useForm test', () => {
  const initialForm = {
    name: 'Erick',
    email: 'erick@example.com',
  };

  test('should return function ', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [value, inputHandleChange, reset] = result.current;
    expect(value).toEqual(initialForm);
    expect(typeof inputHandleChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should change input value ', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, inputHandleChange] = result.current;
    act(() => {
      inputHandleChange({
        target: {
          name: 'name',
          value: 'Memo',
        },
      });
    });
    const [value] = result.current;
    expect(value).toEqual({ ...initialForm, name: 'Memo' });
  });

  test('Reset form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, inputHandleChange, reset] = result.current;
    act(() => {
      inputHandleChange({
        target: {
          name: 'name',
          value: 'Memo',
        },
      });
      reset();
    });
    const [value] = result.current;
    expect(value).toEqual(initialForm);
  });
});
