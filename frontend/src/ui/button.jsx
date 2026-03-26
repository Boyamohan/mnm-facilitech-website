export default function Button({
  type = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const baseClasses = 'px-6 py-2 rounded-lg font-medium transition-colors';
  
  const variantClasses = variant === 'primary'
    ? 'bg-brand-primary text-white hover:bg-brand-dark'
    : variant === 'secondary'
    ? 'bg-gray-200 text-brand-dark hover:bg-gray-300'
    : '';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
