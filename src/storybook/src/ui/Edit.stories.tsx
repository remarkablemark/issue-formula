import '@atlaskit/css-reset';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ReactNode, useEffect } from 'react';

import Edit from '../../../frontend/src/edit/Edit';
import { useFormValuesStore } from '../../../frontend/src/hooks';
import type { FormValues } from '../../../frontend/src/types';

const meta: Meta<typeof Edit> = {
  title: 'UI/Edit',
  component: Edit,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

interface Props {
  children: ReactNode;
  formValues: FormValues;
}

function Store(props: Props) {
  const { setFormValues } = useFormValuesStore();
  useEffect(() => {
    setFormValues(props.formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return props.children;
}

export const Blank: Story = {
  decorators: [
    (story) => {
      const formValues = {
        variable: [],
        function: [],
        jql: [],
        formula: [],
        label: [],
        decimal: [],
        prefix: [],
        suffix: [],
      };
      return <Store formValues={formValues}>{story()}</Store>;
    },
  ],
};

export const Filled: Story = {
  decorators: [
    (story) => {
      const formValues = {
        variable: ['a', 'b'],
        function: [
          { label: 'COUNT', value: 'COUNT' },
          { label: 'COUNT', value: 'COUNT' },
        ],
        jql: ['description IS EMPTY', 'status IN ("In Progress", "Closed")'],
        formula: ['a + b', 'a / b * 100'],
        label: ['Total', 'Percentage'],
        decimal: ['0', '1'],
        prefix: ['#', ''],
        suffix: ['', '%'],
      };
      return <Store formValues={formValues}>{story()}</Store>;
    },
  ],
};
