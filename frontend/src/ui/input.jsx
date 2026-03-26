import React from 'react';

export default function Input({
  type = 'text',
  placeholder,
  className = '',
  as,
  rows,
  ...props
}) {
  if (as === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent ${className}`}
        {...props}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent ${className}`}
      {...props}
    />
  );
}
