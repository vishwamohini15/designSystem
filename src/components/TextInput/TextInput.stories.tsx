import React, { useState } from 'react';
import { TextInput } from './TextInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <TextInput
        label="Name"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <TextInput
        label="Email"
        placeholder="Enter your email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error
        helperText="Invalid email address"
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Disabled input',
    value: 'vishwamohini',
    onChange: () => {},
    disabled: true,
  },
};

// export {}