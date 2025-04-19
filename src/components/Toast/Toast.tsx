import React, { useEffect } from 'react';
import { ToastProps } from './Toast.types';
import clsx from 'clsx';

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles: Record<string, string> = {
    success: 'bg-green-100 text-green-800 border-green-400',
    error: 'bg-red-100 text-red-800 border-red-400',
    info: 'bg-blue-100 text-blue-800 border-blue-400',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
  };

  return (
    <div
      className={clsx(
        'border-l-4 p-4 rounded shadow-md max-w-sm',
        typeStyles[type]
      )}
    >
      <div className="flex justify-between items-start">
        <p className="text-sm">{message}</p>
        <button onClick={onClose} className="ml-4 text-sm font-bold">×</button>
      </div>
    </div>
  );
};
