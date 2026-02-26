export default function Card({ 
  title, 
  description, 
  image, 
  children,
  className = '',
}) {
  return (
    <div className={`bg-primary-white border border-neutral-gray rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="font-averta font-bold text-xl text-primary-dark mb-3">
            {title}
          </h3>
        )}
        {description && (
          <p className="font-manrope text-primary-dark mb-4">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
