import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceDetails from './components/ServiceDetails';
import EquipmentShowcase from './components/EquipmentShowcase';
import SampleGallery from './components/SampleGallery';
import PricingTable from './components/PricingTable';
import RelatedServices from './components/RelatedServices';
import ContactForm from './components/ContactForm';
import Breadcrumb from './components/Breadcrumb';

const LaserCuttingServicesPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  // Laser Cutting service data
  const serviceData = {
    id: 3,
    title: "Laser Cutting Services",
    category: "Precision Laser Technology",
    description: "Professional laser cutting services for intricate designs and detailed fabrication on various materials including wood, acrylic, leather, and fabric with precision and design complexity capabilities.",
    detailedDescription: `Our Laser Cutting Services highlight precision laser cutting technology for intricate designs and detailed fabrication to attract clients requiring high-accuracy cutting solutions. Using advanced laser technology, we deliver exceptional precision and detail for your most demanding projects.\n\nWhether you need prototypes, decorative elements, signage, or custom parts, our laser cutting machines handle the most intricate patterns and precise cuts with minimal material waste. From delicate jewelry components to architectural details, we transform your vector designs into reality with unmatched accuracy.\n\nOur experienced technicians work closely with you to optimize your designs for laser cutting, ensuring the best possible results while maintaining design integrity, meeting your timeline and budget requirements.`,
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    startingPrice: 600,
    turnaround: "2-3 days",
    minimumOrder: "1 piece",
    keyFeatures: [
      "Intricate Patterns",
      "High Precision",
      "Multiple Materials",
      "Vector Compatible"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Cutting Area",
        description: "Up to 1.3m x 0.9m cutting bed with precision positioning"
      },
      {
        icon: "Target",
        title: "Precision",
        description: "±0.05mm accuracy with clean, sealed edges"
      },
      {
        icon: "Layers",
        title: "Material Range",
        description: "Wood, acrylic, leather, fabric, cardboard, and thin metals"
      },
      {
        icon: "Zap",
        title: "Laser Power",
        description: "Variable power settings for different materials and thicknesses"
      },
      {
        icon: "Settings",
        title: "Design Complexity",
        description: "Handles intricate patterns and fine details with ease"
      },
      {
        icon: "FileText",
        title: "File Formats",
        description: "Vector files: AI, SVG, DXF, PDF for optimal results"
      }
    ],
    materials: [
      "Wood & Plywood",
      "Acrylic Sheets",
      "Leather & Faux Leather",
      "Fabric & Textiles",
      "Cardboard & Paper",
      "Foam Core",
      "Rubber Sheets",
      "Thin Metal Sheets",
      "Cork Sheets",
      "Felt Material",
      "Mylar & Films",
      "Veneer Sheets"
    ]
  };

  const equipmentData = [
    {
      name: "CO2 Laser Cutter",
      description: "High-precision CO2 laser system for accurate cutting of various non-metal materials with exceptional edge quality.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "1.3m x 0.9m cutting area",
      capabilities: [
        "Variable power control",
        "High-speed cutting",
        "Engraving capability",
        "Air assist system"
      ]
    },
    {
      name: "Precision Optics System",
      description: "Advanced laser optics with auto-focus capability for consistent cutting quality across materials.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Focal length: 50-150mm",
      capabilities: [
        "Auto-focus technology",
        "Beam quality optimization",
        "Material thickness detection",
        "Edge quality enhancement"
      ]
    },
    {
      name: "Vector Processing Software",
      description: "Professional laser cutting software for optimal path planning and material efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Unlimited design complexity",
      capabilities: [
        "Vector optimization",
        "Nesting algorithms",
        "Multi-layer processing",
        "Cut quality simulation"
      ]
    }
  ];

  const sampleGalleryData = [
    {
      id: 1,
      title: "Intricate Jewelry",
      category: "Jewelry",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Decorative Panels",
      category: "Decoration",
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Custom Signage",
      category: "Signage",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Textile Patterns",
      category: "Textiles",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Architectural Models",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Art Installations",
      category: "Art",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Leather Goods",
      category: "Leather",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Precision Stencils",
      category: "Stencils",
      image: "https://images.unsplash.com/photo-1581594736987-d06b0d4eac08?w=400&h=400&fit=crop"
    }
  ];

  const pricingPackages = [
    {
      name: "Basic Laser Cutting",
      description: "Perfect for simple designs and small projects",
      price: 1500,
      originalPrice: 2000,
      unit: "sq meter",
      popular: false,
      turnaround: "3-5 days",
      features: [
        "Standard material cutting",
        "Basic vector file conversion",
        "Standard edge finishing",
        "Digital proof included",
        "Free delivery within Nairobi",
        "Quality guarantee"
      ]
    },
    {
      name: "Professional Cutting",
      description: "Most popular for intricate commercial projects",
      price: 2800,
      originalPrice: 3500,
      unit: "sq meter",
      popular: true,
      turnaround: "2-3 days",
      features: [
        "Premium material options",
        "Advanced vector optimization",
        "Precision edge finishing",
        "Multiple design iterations",
        "Rush delivery available",
        "Design consultation",
        "2-year quality guarantee",
        "Technical support included"
      ]
    },
    {
      name: "Premium Precision",
      description: "For high-end detailed fabrication projects",
      price: 4500,
      unit: "sq meter",
      popular: false,
      turnaround: "24-48 hours",
      features: [
        "Premium specialty materials",
        "Dedicated project manager",
        "Ultra-precision cutting",
        "Custom material sourcing",
        "Same-day rush available",
        "On-site consultation",
        "3-year quality guarantee",
        "Volume pricing discounts",
        "Priority production queue"
      ]
    }
  ];

  const relatedServicesData = [
    {
      title: "CNC Cutting",
      category: "Precision Fabrication",
      description: "Professional CNC cutting services for precise fabrication of various materials.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
      startingPrice: 800,
      turnaround: "3-5 days",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"]
    },
    {
      title: "Large Format Printing",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and displays.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["Weather Resistant", "Multiple Formats", "Fast Turnaround"]
    },
    {
      title: "UV Printing",
      category: "Specialty Printing",
      description: "Direct UV printing on various materials including glass, metal, and plastics.",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
      startingPrice: 200,
      turnaround: "2-3 days",
      features: ["Direct Material Printing", "Durable Finish", "Vibrant Colors"]
    }
  ];

  const breadcrumbItems = [
    { label: "Home", path: "/homepage" },
    { label: "Services", path: "/services" },
    { label: serviceData.title, path: null }
  ];

  useEffect(() => {
    setSelectedService(serviceData);
    window.scrollTo(0, 0);
  }, []);

  const handleGetQuote = (packageData = null) => {
    navigate('/contact-page', { 
      state: { 
        service: serviceData.title,
        package: packageData?.name 
      }
    });
  };

  const handleWhatsAppChat = () => {
    const phoneNumber = '+254700000000';
    const message = `Hello! I'm interested in ${serviceData.title} services. Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleServiceClick = (service) => {
    // Navigate to specific service pages
    if (service.title === "CNC Cutting") {
      navigate('/cnc-cutting-services-page');
    } else if (service.title === "Large Format Printing") {
      navigate('/service-detail-page');
    } else if (service.title === "UV Printing") {
      navigate('/uv-printing-services-page');
    }
    window.scrollTo(0, 0);
  };

  if (!selectedService) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading service details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <Breadcrumb items={breadcrumbItems} />
        
        <ServiceHero 
          service={selectedService}
          onGetQuote={handleGetQuote}
          onWhatsAppChat={handleWhatsAppChat}
        />
        
        <ServiceDetails service={selectedService} />
        
        <EquipmentShowcase equipment={equipmentData} />
        
        <SampleGallery samples={sampleGalleryData} />
        
        <PricingTable 
          pricingPackages={pricingPackages}
          onGetQuote={handleGetQuote}
        />
        
        <RelatedServices 
          relatedServices={relatedServicesData}
          onServiceClick={handleServiceClick}
        />
        
        <ContactForm serviceName={selectedService.title} />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <div>
                  <span className="text-xl font-heading font-bold">Halo Creatives</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted partner for professional printing services in Nairobi. Quality, speed, and reliability in every project.
              </p>
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Halo Creatives. All rights reserved.
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><button onClick={() => navigate('/homepage')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => navigate('/service-detail-page')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => navigate('/gallery-page')} className="hover:text-white transition-colors">Gallery</button></li>
                <li><button onClick={() => navigate('/contact-page')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+254 700 000 000</li>
                <li>info@halocreatives.co.ke</li>
                <li>Nairobi, Kenya</li>
                <li>Mon-Fri: 8AM-6PM</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LaserCuttingServicesPage;