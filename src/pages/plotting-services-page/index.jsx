import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ServiceHero from '../service-detail-page/components/ServiceHero';
import ServiceDetails from '../service-detail-page/components/ServiceDetails';
import EquipmentShowcase from '../service-detail-page/components/EquipmentShowcase';
import SampleGallery from '../service-detail-page/components/SampleGallery';
import PricingTable from '../service-detail-page/components/PricingTable';
import RelatedServices from '../service-detail-page/components/RelatedServices';
import ContactForm from '../service-detail-page/components/ContactForm';
import Breadcrumb from '../service-detail-page/components/Breadcrumb';

const PlottingServicesPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  // Plotting service specific data
  const serviceData = {
    id: 2,
    title: "Plotting Services",
    category: "Technical Drawing",
    description: "Professional plotting services for technical drawings, architectural plans, engineering drawings, and CAD documentation with precision and clarity.",
    detailedDescription: `Our plotting services provide high-quality technical drawing reproduction for engineering, architectural, and construction professionals. Using advanced large format plotters, we deliver crisp, accurate plots from A4 to A0 sizes.\n\nWhether you need architectural blueprints, engineering schematics, construction drawings, or CAD documentation, our plotting service ensures every line and detail is reproduced with precision. We work with various file formats and provide fast turnaround times for urgent projects.\n\nOur experienced team understands the critical nature of technical documentation and maintains strict quality control to ensure your plots meet professional standards and specifications.`,
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    startingPrice: 200,
    turnaround: "Same day",
    minimumOrder: "1 sheet",
    keyFeatures: [
      "High Precision Plotting",
      "Multiple Paper Sizes",
      "CAD File Support",
      "Fast Turnaround"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Paper Sizes",
        description: "A4, A3, A2, A1, A0 plotting capabilities"
      },
      {
        icon: "Target",
        title: "Precision",
        description: "±0.1mm accuracy for technical drawings"
      },
      {
        icon: "FileText",
        title: "File Formats",
        description: "DWG, DXF, PDF, PLT, and various CAD formats"
      },
      {
        icon: "Zap",
        title: "Resolution",
        description: "Up to 2400 DPI for crisp line work"
      },
      {
        icon: "Clock",
        title: "Speed",
        description: "A0 plots in under 2 minutes"
      },
      {
        icon: "Archive",
        title: "Paper Types",
        description: "Bond, vellum, film, and specialty media options"
      }
    ],
    materials: [
      "20lb Bond Paper",
      "24lb Bond Paper",
      "Vellum Paper",
      "Polyester Film",
      "Translucent Bond",
      "Photo Paper",
      "Recycled Paper",
      "Heavyweight Paper",
      "Coated Paper",
      "Archival Paper"
    ]
  };

  const equipmentData = [
    {
      name: "HP DesignJet T830 Plotter",
      description: "Professional large format plotter designed for technical drawings and CAD applications.",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "A0 (841mm x 1189mm)",
      capabilities: [
        "High precision plotting",
        "Multiple media support",
        "Fast processing speed",
        "Network connectivity"
      ]
    },
    {
      name: "Canon imagePROGRAF TX-4000",
      description: "Advanced technical document plotter with exceptional line quality and speed.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "44-inch width (1118mm)",
      capabilities: [
        "Superior line quality",
        "Water-resistant pigment inks",
        "High-speed printing",
        "Integrated stacker"
      ]
    },
    {
      name: "Epson SureColor T5170",
      description: "Reliable wireless plotter for engineering and architectural drawings.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "36-inch width (914mm)",
      capabilities: [
        "Wireless connectivity",
        "PrecisionCore technology",
        "Versatile media handling",
        "Mobile printing support"
      ]
    }
  ];

  const sampleGalleryData = [
    {
      id: 1,
      title: "Architectural Floor Plan",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Engineering Schematic",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1581092918484-8313de0f6f9d?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Construction Drawing",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Site Plan",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Electrical Layout",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Mechanical Drawing",
      category: "Mechanical",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Survey Map",
      category: "Surveying",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Technical Specification",
      category: "Documentation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  const pricingPackages = [
    {
      name: "Standard Plotting",
      description: "Perfect for individual drawings and small projects",
      price: 200,
      originalPrice: 300,
      unit: "per A1 sheet",
      popular: false,
      turnaround: "Same day",
      features: [
        "A4 to A0 sizes available",
        "Standard bond paper",
        "Digital file processing",
        "Quality check included",
        "Free pickup in CBD",
        "Standard resolution"
      ]
    },
    {
      name: "Professional Plotting",
      description: "Most popular for architects and engineers",
      price: 350,
      originalPrice: 500,
      unit: "per A1 sheet",
      popular: true,
      turnaround: "2-4 hours",
      features: [
        "Premium paper options",
        "Color plotting available",
        "Multiple copy discounts",
        "Rush service included",
        "File format conversion",
        "Delivery service",
        "Quality guarantee",
        "Technical support"
      ]
    },
    {
      name: "Bulk Plotting",
      description: "For large projects and construction firms",
      price: 150,
      unit: "per A1 sheet",
      popular: false,
      turnaround: "24 hours",
      features: [
        "Volume discounts (50+ sheets)",
        "Premium media options",
        "Dedicated project manager",
        "Priority processing",
        "Free delivery",
        "Extended warranty",
        "Bulk storage options",
        "Account billing available",
        "Technical consultation"
      ]
    }
  ];

  const relatedServicesData = [
    {
      title: "Large Format Printing",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and signage applications.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["High Resolution", "Weather Resistant", "Custom Sizes"]
    },
    {
      title: "Lamination Services",
      category: "Finishing",
      description: "Professional lamination services to protect and enhance your technical drawings.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      startingPrice: 100,
      turnaround: "Same day",
      features: ["Matte & Gloss Options", "Various Thicknesses", "Document Protection"]
    },
    {
      title: "Mounting Services",
      category: "Finishing",
      description: "Professional mounting and display solutions for technical drawings and plans.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
      startingPrice: 300,
      turnaround: "2-3 days",
      features: ["Foam Board Mounting", "Aluminum Mounting", "Custom Framing"]
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
    // In a real application, this would navigate to the specific service detail page
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

export default PlottingServicesPage;