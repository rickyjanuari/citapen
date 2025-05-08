// app/components/ServiceCard.tsx
import { Link } from "@remix-run/react";

type ServiceCardProps = {
  service: {
    id: string;
    name: string;
    description: string;
    icon: string;
    price: string;
    estimatedTime: string;
  };
  citySlug?: string;
};

export default function ServiceCard({ service, citySlug }: ServiceCardProps) {
  const href = citySlug 
    ? `/${citySlug}/layanan/${service.id}` 
    : `/layanan/${service.id}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center text-6xl">
        <span>{service.icon}</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{service.price}</span>
          <span>{service.estimatedTime}</span>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Link 
            to={href}
            className="inline-flex items-center text-secondary font-medium"
          >
            Selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}