import { act, renderHook } from '@testing-library/react';

import { useFormValuesStore } from './formValuesStore';

describe('updateFormValue', () => {
  it('updates function', () => {
    const {
      result: { current: store },
    } = renderHook(() => useFormValuesStore());
    const value = 'value';

    act(() => {
      const index = 0;
      store.updateFormValue('function', index, value);
    });

    expect(store.function).toEqual([
      {
        label: value,
        value,
      },
    ]);
  });
});

describe('deleteVariable', () => {
  it('deletes variable', () => {
    // Start with fresh state by creating a new hook instance
    const { result } = renderHook(() => useFormValuesStore());

    // Add a variable first
    act(() => {
      result.current.addVariable();
    });

    // Verify variable was added
    expect(result.current.variable).toHaveLength(1);

    // Update the variable value
    act(() => {
      result.current.updateFormValue('variable', 0, 'test-value');
    });

    expect(result.current.variable).toEqual(['test-value']);

    // Delete the variable
    act(() => {
      result.current.deleteVariable(0);
    });

    // Verify variable was deleted
    expect(result.current.variable).toHaveLength(0);
  });
});
