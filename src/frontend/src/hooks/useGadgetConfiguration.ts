import { useEffect } from 'react';

import { DEV } from '../env';
import { decode, log } from '../helpers';
import { useFormValuesStore } from '../store';
import type { FormValues } from '../types';
import { useForgeContext } from './useForgeContext';

interface Result {
  formValues?: FormValues;
  isLoading: boolean;
}

export function useGadgetConfiguration(): Result {
  const context = useForgeContext();
  const { setFormValues } = useFormValuesStore();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const formValues: FormValues = context?.extension.gadgetConfiguration;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!formValues) {
      return;
    }

    (['formula', 'jql', 'label'] as const).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      formValues[key]?.forEach((value, index) => {
        formValues[key][index] = decode(value);
      });
    });

    /* v8 ignore start */
    if (DEV) {
      log.info('formValues:', formValues);
    }
    /* v8 ignore stop */

    setFormValues(formValues);
  }, [formValues, setFormValues]);

  return {
    formValues,
    isLoading: !context,
  };
}
