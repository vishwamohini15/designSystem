import React from 'react';
import { TypographyProps } from './Typography.types';
import clsx from 'clsx';
import { typography } from '../../theme/typography'; // ✅

const variantClasses: Record<string, string> = typography;

 const Typography: React.FC<TypographyProps> = ({ children, variant, className }) => {
  const Component = variant.startsWith('h') ? variant : 'p';

  return React.createElement(
    Component,
    {
      className: clsx(variantClasses[variant], className),
    },
    children
  );
};

export default Typography;

