import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingTable = ({ pricingPackages, onGetQuote }) => {
  return (
    <div className="bg-surface-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Laser Cutting Pricing
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Competitive pricing for precision laser cutting services. Select the package that matches your project complexity and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-sm border-2 ${
                pkg.popular ? 'border-primary' : 'border-border'
              } overflow-hidden`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-6 ${pkg.popular ? 'pt-12' : ''}`}>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  {pkg.name}
                </h3>
                <p className="text-text-secondary mb-6">
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-primary">
                      KES {pkg.price.toLocaleString()}
                    </span>
                    <span className="text-text-secondary ml-2">/ {pkg.unit}</span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="flex items-center mt-1">
                      <span className="text-text-secondary line-through mr-2">
                        KES {pkg.originalPrice.toLocaleString()}
                      </span>
                      <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                        Save KES {(pkg.originalPrice - pkg.price).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2 mb-6 p-3 bg-primary-50 rounded-lg">
                  <Icon name="Clock" size={16} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-primary">
                    Delivery: {pkg.turnaround}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={pkg.popular ? "primary" : "outline"}
                  size="lg"
                  onClick={() => onGetQuote(pkg)}
                  className="w-full"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Need a custom quote for your intricate design project?
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onGetQuote()}
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;