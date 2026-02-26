export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'font-manrope font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95';
  
  const variants = {
    primary: 'bg-primary-dark text-primary-white hover:bg-primary-light',
    secondary: 'bg-primary-light text-primary-white hover:bg-primary-dark',
    outline: 'border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-primary-white', // Asumiendo que primary-dark está definido en tailwind.config.js
    'outline-light': 'border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-primary-white',
    'filled-light': 'bg-primary-light text-primary-white hover:bg-primary-dark', // Nueva variante
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
