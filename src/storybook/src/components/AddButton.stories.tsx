import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { AddButton } from '../../../frontend/src/shared/AddButton';

const meta: Meta<typeof AddButton> = {
  title: 'Components/AddButton',
  component: AddButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
