export default function Section({ 
  id, 
  title, 
  subtitle, 
  children,
  className = '',
  bgColor = 'bg-primary-white',
}) {
  return (
    <section 
      id={id}
      className={`py-12 md:py-20 ${bgColor} ${className} fade-in`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12">
            <h2 className="font-averta font-bold text-4xl text-primary-dark mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="font-manrope text-lg text-primary-dark opacity-80">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
