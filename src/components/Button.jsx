export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'font-manrope font-semibold transition-all duration-200 rounded-lg';
  
  const variants = {
    primary: 'bg-primary-dark text-primary-white hover:bg-primary-light',
    secondary: 'bg-primary-light text-primary-white hover:bg-primary-dark',
    outline: 'border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-primary-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
