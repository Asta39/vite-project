import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      name: "Large Format Printing",
      path: '/service-detail-page',
      description: "High-quality banners, posters, and signage for events, advertising, and business promotions. Perfect for outdoor and indoor displays.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Maximize2",
      startingPrice: 500,
      turnaround: "24-48 hours",
      isPopular: true,
      features: [
        "Weather-resistant materials",
        "Custom sizes up to 5m width",
        "Full-color printing",
        "Grommets and finishing included"
      ]
    },
    {
      id: 2,
      name: "Plotting Services",
      path: '/plotting-services-page',
      description: "Technical drawings, architectural plans, and engineering blueprints with precision and clarity. CAD file compatible.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "PenTool",
      startingPrice: 200,
      turnaround: "Same day",
      isPopular: false,
      features: [
        "A0 to A4 sizes available",
        "CAD file support",
        "High-resolution output",
        "Multiple paper types"
      ]
    },
    {
      id: 3,
      name: "UV Printing",
      path: '/uv-printing-services-page',
      description: "Direct printing on various materials including glass, metal, wood, and plastic with vibrant, durable results.",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Zap",
      startingPrice: 1000,
      turnaround: "2-3 days",
      isPopular: true,
      features: [
        "Print on any material",
        "Scratch and fade resistant",
        "Raised texture effects",
        "Eco-friendly UV inks"
      ]
    },
    {
      id: 4,
      name: "CNC Cutting",
      path: '/cnc-cutting-services-page',
      description: "Precision cutting services for wood, acrylic, metal, and foam materials. Perfect for signage and custom fabrication.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Scissors",
      startingPrice: 800,
      turnaround: "3-5 days",
      isPopular: false,
      features: [
        "Multiple material support",
        "Complex shape cutting",
        "Smooth edge finishing",
        "Custom thickness options"
      ]
    },
    {
      id: 5,
      name: "Laser Cutting",
      path: '/laser-cutting-services-page',
      description: "High-precision laser cutting for intricate designs in various materials. Ideal for decorative items and prototypes.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Zap",
      startingPrice: 600,
      turnaround: "2-4 days",
      isPopular: false,
      features: [
        "Intricate detail capability",
        "Clean, precise cuts",
        "Engraving services",
        "Fast turnaround times"
      ]
    },
    {
      id: 6,
      name: "T-shirt Printing",
      path: '/t-shirt-printing-services-page',
      description: "Custom apparel printing including t-shirts, hoodies, and uniforms. Perfect for events, teams, and promotional wear.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Shirt",
      startingPrice: 700,
      turnaround: "1-2 days",
      isPopular: true,
      features: [
        "Various printing methods",
        "Quality cotton materials",
        "Bulk order discounts",
        "Custom design services"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full">
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            Professional Printing
            <span className="block text-primary">Solutions</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive printing services with state-of-the-art 
            equipment and expert craftsmanship. Every project is handled with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Don't see what you're looking for? We offer custom solutions for unique printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/contact-page'}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Request Custom Quote
            </button>
            <button
              onClick={() => {
                const phoneNumber = '+254791159618';
                const message = 'Hello! I would like to discuss custom printing solutions for my business.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Chat with Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;