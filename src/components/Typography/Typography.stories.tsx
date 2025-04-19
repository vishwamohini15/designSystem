import React from 'react';
import { Typography } from './Typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'paragraph',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
  },
};
