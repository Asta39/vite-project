import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedServices = ({ relatedServices, onServiceClick }) => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Related Services
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our comprehensive range of fabrication and printing services to complete your project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => onServiceClick(service)}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {service.category}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-text-secondary">Starting from</span>
                    <div className="text-lg font-bold text-primary">
                      KES {service.startingPrice.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-text-secondary">Turnaround</span>
                    <div className="text-sm font-semibold text-text-primary">
                      {service.turnaround}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-primary-50 text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onServiceClick(service);
                  }}
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;