import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const EquipmentCapabilities = () => {
  const equipment = [
    {
      name: 'Large Format UV Printer',
      model: 'Roland VersaUV LEF-300',
      image: 'https://images.pexels.com/photos/3846207/pexels-photo-3846207.jpeg?auto=compress&cs=tinysrgb&w=800',
      capabilities: [
        'Print size up to 770mm × 330mm',
        'UV-LED curing technology',
        'Print on various materials',
        'White ink and clear coating'
      ],
      specifications: {
        'Max Print Speed': '3.2 m²/hour',
        'Resolution': '1440 × 1440 dpi',
        'Ink Colors': '4 colors + White + Clear',
        'Material Thickness': 'Up to 100mm'
      },
      applications: ['Signage', 'Promotional items', 'Phone cases', 'Awards']
    },
    {
      name: 'CNC Cutting Machine',
      model: 'Multicam 3000 Series',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
      capabilities: [
        'Precision cutting and engraving',
        'Multiple material compatibility',
        'Automated tool changing',
        '3D carving capabilities'
      ],
      specifications: {
        'Cutting Area': '3000mm × 1500mm',
        'Spindle Power': '9.0 kW HSD',
        'Positioning Accuracy': '±0.05mm',
        'Max Cutting Speed': '30 m/min'
      },
      applications: ['Acrylic signs', 'Wood engraving', 'Metal cutting', 'Architectural models']
    },
    {
      name: 'Industrial Plotter',
      model: 'HP DesignJet Z9+',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      capabilities: [
        'High-speed large format printing',
        'Professional color accuracy',
        'Multiple media handling',
        'Automated maintenance'
      ],
      specifications: {
        'Print Width': 'Up to 1118mm (44")',
        'Print Speed': 'Up to 91 m²/hour',
        'Resolution': 'Up to 2400 × 1200 dpi',
        'Ink System': '9-ink ChromaPRESS'
      },
      applications: ['Technical drawings', 'Architectural plans', 'Posters', 'Banners']
    },
    {
      name: 'Laser Cutting System',
      model: 'Epilog Fusion Pro 48',
      image: 'https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800',
      capabilities: [
        'Precision laser cutting',
        'Engraving capabilities',
        'Multiple material support',
        'Computer-controlled operation'
      ],
      specifications: {
        'Cutting Area': '1219mm × 914mm',
        'Laser Power': '120 Watts CO2',
        'Cutting Speed': 'Up to 1676mm/min',
        'Engraving Speed': 'Up to 3556mm/min'
      },
      applications: ['Acrylic cutting', 'Wood engraving', 'Fabric cutting', 'Custom designs']
    },
    {
      name: 'Digital Textile Printer',
      model: 'Epson SureColor F9470H',
      image: 'https://images.pexels.com/photos/7947662/pexels-photo-7947662.jpeg?auto=compress&cs=tinysrgb&w=800',
      capabilities: [
        'High-volume textile printing',
        'Fluorescent ink compatibility',
        'Automated media handling',
        'Production-level reliability'
      ],
      specifications: {
        'Print Width': '1626mm (64")',
        'Print Speed': 'Up to 635 m²/hour',
        'Ink Configuration': '8-color UltraChrome',
        'Media Capacity': '180kg roll weight'
      },
      applications: ['T-shirt printing', 'Banners', 'Flags', 'Soft signage']
    },
    {
      name: 'Offset Printing Press',
      model: 'Heidelberg Speedmaster XL 75',
      image: 'https://images.pexels.com/photos/3846207/pexels-photo-3846207.jpeg?auto=compress&cs=tinysrgb&w=800',
      capabilities: [
        'High-volume commercial printing',
        'Superior print quality',
        'Multiple format support',
        'Automated color control'
      ],
      specifications: {
        'Sheet Size': 'Up to 530mm × 750mm',
        'Print Speed': 'Up to 18,000 sheets/hour',
        'Colors': 'Up to 8 colors',
        'Registration Accuracy': '±0.1mm'
      },
      applications: ['Business cards', 'Brochures', 'Books', 'Packaging']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Industrial Equipment Capabilities
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            State-of-the-art machinery ensuring high-quality output for large-scale corporate and political printing projects
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {equipment.map((item, index) => (
            <div key={index} className="bg-surface-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Equipment Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-heading font-bold">{item.name}</h3>
                  <p className="text-sm opacity-90">{item.model}</p>
                </div>
              </div>

              {/* Equipment Details */}
              <div className="p-8">
                {/* Capabilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <Icon name="Settings" size={20} className="mr-2 text-primary" />
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <Icon name="Zap" size={20} className="mr-2 text-secondary" />
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(item.specifications).map(([spec, value], idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-surface-200 last:border-b-0">
                        <span className="text-sm font-medium text-text-secondary">{spec}</span>
                        <span className="text-sm font-semibold text-text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <Icon name="Target" size={20} className="mr-2 text-accent" />
                    Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.applications.map((app, idx) => (
                      <span key={idx} className="bg-primary-100 text-primary text-xs px-3 py-1 rounded-full font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Production Capacity Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold mb-4">Production Capacity</h3>
            <p className="text-primary-100 text-lg">
              Our industrial-grade equipment ensures we can handle large-scale orders with consistent quality
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '50,000+', label: 'Posters per day', icon: 'FileImage' },
              { metric: '10,000+', label: 'T-shirts per day', icon: 'Shirt' },
              { metric: '500+', label: 'Banners per day', icon: 'Flag' },
              { metric: '24/7', label: 'Production capability', icon: 'Clock' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={28} color="white" />
                </div>
                <div className="text-3xl font-heading font-bold mb-2">{stat.metric}</div>
                <div className="text-primary-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCapabilities;