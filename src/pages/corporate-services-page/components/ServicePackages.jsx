import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServicePackages = () => {
  const [activePackage, setActivePackage] = useState('election');

    const handleWhatsAppClick = () => {
    const phoneNumber = '254791159618';
    const message = 'Hello! I would like to inquire about your Service packages on corpotate printing services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };


  const packages = {
    election: {
      title: 'Election Campaign Package',
      description: 'Complete printing solutions for political campaigns and election materials',
      color: 'primary',
      services: [
        {
          service: 'Campaign Posters (A1)',
          quantities: ['500 pcs', '1,000 pcs', '5,000 pcs', '10,000 pcs'],
          prices: ['KES 75,000', 'KES 140,000', 'KES 650,000', 'KES 1,200,000'],
          features: ['Weather resistant', 'UV protected', 'Full color']
        },
        {
          service: 'Banners & Billboards',
          quantities: ['10 pcs', '25 pcs', '50 pcs', '100 pcs'],
          prices: ['KES 45,000', 'KES 100,000', 'KES 180,000', 'KES 320,000'],
          features: ['Large format', 'Outdoor grade', 'Custom sizes']
        },
        {
          service: 'T-shirts & Merchandise',
          quantities: ['100 pcs', '500 pcs', '1,000 pcs', '5,000 pcs'],
          prices: ['KES 35,000', 'KES 150,000', 'KES 280,000', 'KES 1,200,000'],
          features: ['Quality cotton', 'Screen printing', 'Multiple colors']
        },
        {
          service: 'Flyers & Leaflets',
          quantities: ['5,000 pcs', '10,000 pcs', '25,000 pcs', '50,000 pcs'],
          prices: ['KES 25,000', 'KES 45,000', 'KES 100,000', 'KES 180,000'],
          features: ['A5 size', 'Glossy finish', 'Fast delivery']
        }
      ]
    },
    corporate: {
      title: 'Corporate Branding Package',
      description: 'Professional branding materials for businesses and organizations',
      color: 'secondary',
      services: [
        {
          service: 'Business Cards',
          quantities: ['500 pcs', '1,000 pcs', '2,500 pcs', '5,000 pcs'],
          prices: ['KES 8,000', 'KES 14,000', 'KES 32,000', 'KES 58,000'],
          features: ['Premium paper', 'Matt/Gloss finish', 'Double sided']
        },
        {
          service: 'Corporate Brochures',
          quantities: ['250 pcs', '500 pcs', '1,000 pcs', '2,500 pcs'],
          prices: ['KES 18,000', 'KES 32,000', 'KES 58,000', 'KES 125,000'],
          features: ['Tri-fold design', 'High quality print', 'Custom design']
        },
        {
          service: 'Office Signage',
          quantities: ['5 pcs', '10 pcs', '20 pcs', '50 pcs'],
          prices: ['KES 25,000', 'KES 45,000', 'KES 80,000', 'KES 180,000'],
          features: ['Acrylic/Metal', 'LED options', 'Professional mounting']
        },
        {
          service: 'Branded Merchandise',
          quantities: ['50 pcs', '100 pcs', '250 pcs', '500 pcs'],
          prices: ['KES 22,000', 'KES 38,000', 'KES 85,000', 'KES 150,000'],
          features: ['Mugs, pens, bags', 'Logo printing', 'Gift packaging']
        }
      ]
    },
    event: {
      title: 'Event & Exhibition Package',
      description: 'Complete solutions for events, exhibitions, and trade shows',
      color: 'error',
      services: [
        {
          service: 'Exhibition Banners',
          quantities: ['5 pcs', '10 pcs', '25 pcs', '50 pcs'],
          prices: ['KES 35,000', 'KES 65,000', 'KES 145,000', 'KES 260,000'],
          features: ['Roll-up stands', 'Portable design', 'High resolution']
        },
        {
          service: 'Event Backdrops',
          quantities: ['2 pcs', '5 pcs', '10 pcs', '20 pcs'],
          prices: ['KES 28,000', 'KES 65,000', 'KES 120,000', 'KES 220,000'],
          features: ['Large format', 'Fabric/Vinyl', 'Easy setup']
        },
        {
          service: 'Table Covers & Runners',
          quantities: ['10 pcs', '25 pcs', '50 pcs', '100 pcs'],
          prices: ['KES 18,000', 'KES 40,000', 'KES 75,000', 'KES 135,000'],
          features: ['Custom fit', 'Washable fabric', 'Full color print']
        },
        {
          service: 'Event Programs & Tickets',
          quantities: ['500 pcs', '1,000 pcs', '2,500 pcs', '5,000 pcs'],
          prices: ['KES 12,000', 'KES 20,000', 'KES 45,000', 'KES 80,000'],
          features: ['Premium paper', 'Perforation', 'Security features']
        }
      ]
    }
  };

  const packageTabs = [
    { key: 'election', label: 'Election Campaign', icon: 'Vote' },
    { key: 'corporate', label: 'Corporate Branding', icon: 'Building2' },
    { key: 'event', label: 'Events & Exhibitions', icon: 'Calendar' }
  ];

  return (
    <section className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Service Packages
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive printing solutions tailored for different business needs with transparent pricing in Kenyan Shillings
          </p>
        </div>

        {/* Package Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {packageTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActivePackage(tab.key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activePackage === tab.key
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-primary-50 hover:text-primary'
              }`}
            >
              <Icon name={tab.icon} size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Active Package Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Package Header */}
          <div className={`bg-gradient-to-r from-${packages[activePackage].color} to-${packages[activePackage].color}-600 text-white p-8`}>
            <h3 className="text-3xl font-heading font-bold mb-3">
              {packages[activePackage].title}
            </h3>
            <p className="text-lg opacity-90">
              {packages[activePackage].description}
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface-100">
                <tr>
                  <th className="text-left p-6 font-semibold text-text-primary">Service</th>
                  <th className="text-center p-6 font-semibold text-text-primary">Starter</th>
                  <th className="text-center p-6 font-semibold text-text-primary">Professional</th>
                  <th className="text-center p-6 font-semibold text-text-primary">Business</th>
                  <th className="text-center p-6 font-semibold text-text-primary">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {packages[activePackage].services.map((service, index) => (
                  <tr key={index} className="border-b border-surface-200 hover:bg-surface-50">
                    <td className="p-6">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">{service.service}</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-primary-100 text-primary px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    {service.quantities.map((quantity, qIndex) => (
                      <td key={qIndex} className="p-6 text-center">
                        <div className="space-y-2">
                          <div className="font-semibold text-text-primary">{service.prices[qIndex]}</div>
                          <div className="text-sm text-text-secondary">{quantity}</div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion View */}
          <div className="lg:hidden p-6 space-y-6">
            {packages[activePackage].services.map((service, index) => (
              <div key={index} className="border border-surface-200 rounded-lg overflow-hidden">
                <div className="bg-surface-100 p-4">
                  <h4 className="font-semibold text-text-primary mb-2">{service.service}</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-primary-100 text-primary px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {service.quantities.map((quantity, qIndex) => (
                    <div key={qIndex} className="flex justify-between items-center py-2 border-b border-surface-100 last:border-b-0">
                      <span className="text-text-secondary">{quantity}</span>
                      <span className="font-semibold text-text-primary">{service.prices[qIndex]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>


          {/* Package Footer */}
          <div className="bg-surface-100 p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-text-secondary">
                All prices include premium materials, and delivery within Nairobi. 
                Bulk discounts available for orders above KES 500,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="FileText"
                  iconPosition="left"
                   
                >
                  Request Custom Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={handleWhatsAppClick}
                >
                  Speak to Consultant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;