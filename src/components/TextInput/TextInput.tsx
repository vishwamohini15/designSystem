import React from 'react';
import { TextInputProps } from './TextInput.types';
import clsx from 'clsx';

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  helperText,
  className,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={clsx(
          'px-3 py-2 border rounded-md focus:outline-none transition-all',
          disabled
            ? 'bg-gray-100 cursor-not-allowed'
            : error
            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
            : 'border-gray-300 focus:ring-1 focus:ring-blue-500',
          className
        )}
      />
      {helperText && (
        <p className={clsx('text-xs', error ? 'text-red-500' : 'text-gray-500')}>
          {helperText}
        </p>
      )}
    </div>
  );
};
