import React, { useState } from 'react';
import { Toast } from './Toast';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const LiveDemo: Story = {
  render: () => {
    const [show, setShow] = useState(true);

    return (
      <div>
        <button
          onClick={() => setShow(true)}
          className="px-3 py-2 bg-blue-500 text-white rounded mb-4"
        >
          Show Toast
        </button>
        {show && (
          <Toast
            message="This is a sample toast message!"
            type="success"
            onClose={() => setShow(false)}
          />
        )}
      </div>
    );
  },
};

export const ErrorToast: Story = {
  args: {
    message: 'Something went wrong!',
    type: 'error',
  },
};

export const InfoToast: Story = {
  args: {
    message: 'This is some information.',
    type: 'info',
  },
};
