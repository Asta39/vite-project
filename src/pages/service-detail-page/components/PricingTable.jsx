import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTable = ({ pricingPackages, onGetQuote }) => {
  return (
    <div className="bg-surface-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Choose the package that best fits your needs. All prices are in Kenyan Shillings (KES) and include VAT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-secondary transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-primary">
                      KES {pkg.price.toLocaleString()}
                    </span>
                    <span className="text-text-secondary ml-2">/{pkg.unit}</span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="text-center mt-2">
                      <span className="text-text-muted line-through text-sm">
                        KES {pkg.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-success ml-2 text-sm font-semibold">
                        Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
                        <Icon name="Check" size={12} color="var(--color-accent)" />
                      </div>
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <Button
                    variant={pkg.popular ? "secondary" : "primary"}
                    size="md"
                    onClick={() => onGetQuote(pkg)}
                    fullWidth
                  >
                    Get Quote
                  </Button>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-4 text-xs text-text-muted">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{pkg.turnaround}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Truck" size={12} />
                        <span>Free Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              Volume Discounts Available
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">5%</div>
                <div className="text-sm text-text-secondary">Orders above KES 50,000</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">10%</div>
                <div className="text-sm text-text-secondary">Orders above KES 100,000</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">15%</div>
                <div className="text-sm text-text-secondary">Orders above KES 200,000</div>
              </div>
            </div>
            <p className="text-sm text-text-muted mt-4">
              * Discounts apply automatically at checkout. Contact us for custom enterprise pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;