import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../../data/serviceData';

import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceDetails from './components/ServiceDetails';
import EquipmentShowcase from './components/EquipmentShowcase';
import SampleGallery from './components/SampleGallery';
import PricingTable from './components/PricingTable';
import RelatedServices from './components/RelatedServices';
import ContactForm from './components/ContactForm';
import Breadcrumb from './components/Breadcrumb';


const CNCCuttingServicesPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  // CNC Cutting service data
  const serviceData = services["cnc-cutting-services"];

  // 2. DEFINE SEO VARIABLES FROM YOUR EXISTING DATA
  const pageTitle = `${serviceData.title} in Nairobi | Luna Graphics`;
  const pageDescription = `Expert ${serviceData.title} in Nairobi. We use high-precision machines for wood, acrylic, and metal. Get a free quote for your custom fabrication project today at Luna Graphics.`;
  const pageUrl = `https://lunagraphics.co.ke/cnc-cutting-services-page`; // Use the actual URL for this page
  const imageUrl = serviceData.heroImage; // Use this page's hero image for social sharing
  const brandName = "Luna Graphics";
  const twitterHandle = "@YourTwitterHandle"; // Replace with your handle

  const equipmentData = [
    {
      name: "Industrial CNC Router",
      description: "High-precision CNC router for accurate cutting of various materials with professional finishing.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "2.5m x 1.5m x 200mm",
      capabilities: [
        "Multi-axis cutting",
        "Automatic tool changing",
        "Vacuum hold-down system",
        "Dust collection system"
      ]
    },
   /* {
      name: "Precision Spindle System",
      description: "High-speed spindle system for smooth cuts and excellent surface finish.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Variable RPM up to 24,000",
      capabilities: [
        "Air-cooled spindle motor",
        "Precision collet system",
        "Variable speed control",
        "Low vibration operation"
      ]
    },*/
    {
      name: "CAD/CAM Software Suite",
      description: "Professional design and manufacturing software for optimal cutting paths.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Unlimited design complexity",
      capabilities: [
        "3D modeling capability",
        "Toolpath optimization",
        "Material simulation",
        "Nesting algorithms"
      ]
    }
  ];

  const sampleGalleryData = [
    {
      id: 1,
      title: "Architectural Panels",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Custom Signage",
      category: "Signage",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Decorative Elements",
      category: "Decoration",
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Prototype Parts",
      category: "Prototyping",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Furniture Components",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Display Stands",
      category: "Displays",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Custom Brackets",
      category: "Hardware",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Art Installations",
      category: "Art",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop"
    }
  ];

  const pricingPackages = [
    {
      name: "Basic Cutting",
      description: "Perfect for simple shapes and prototypes",
      price: 2000,
      originalPrice: 2500,
      unit: "sq meter",
      popular: false,
      turnaround: "5-7 days",
      features: [
        "Standard material cutting",
        "Basic CAD file conversion",
        "Standard edge finishing",
        "Digital proof included",
        "Free delivery within Nairobi",
        "Quality guarantee"
      ]
    },
    {
      name: "Professional Cutting",
      description: "Most popular for commercial projects",
      price: 3500,
      originalPrice: 4500,
      unit: "sq meter",
      popular: true,
      turnaround: "3-5 days",
      features: [
        "Premium material options",
        "Advanced CAD optimization",
        "Smooth edge finishing",
        "Multiple design revisions",
        "Rush delivery available",
        "Installation consultation",
        "2-year quality guarantee",
        "Technical support included"
      ]
    },
    {
      name: "Enterprise Cutting",
      description: "For large-scale manufacturing projects",
      price: 5500,
      unit: "sq meter",
      popular: false,
      turnaround: "2-3 days",
      features: [
        "Premium specialty materials",
        "Dedicated project manager",
        "Custom tooling if required",
        "Precision quality control",
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
      title: "Laser Cutting",
      category: "Precision Cutting",
      description: "High-precision laser cutting for intricate designs and detailed fabrication.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      startingPrice: 600,
      turnaround: "2-3 days",
      features: ["Intricate Designs", "Multiple Materials", "High Precision"]
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
    const phoneNumber = '+254791159618';
    const message = `Hello! I'm interested in ${serviceData.title} services. Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleServiceClick = (service) => {
    // Navigate to specific service pages
    if (service.title === "Laser Cutting") {
      navigate('/laser-cutting-services-page');
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
            {/* 3. ADD THE HELMET COMPONENT RIGHT AT THE TOP */}
      <Helmet>
        {/* --- Primary Meta Tags (MUST be unique for each page) --- */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* --- Open Graph / Facebook --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={brandName} />

        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content={twitterHandle} />
      </Helmet>
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
                  <span className="text-xl font-heading font-bold">Luna Graphics</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted partner for professional printing services in Nairobi. Quality, speed, and reliability in every project.
              </p>
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Luna Graphics. All rights reserved.
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
                <li>+254 791 159 618 </li>
                <li>info@lunagraphics.co.ke</li>
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

export default CNCCuttingServicesPage;