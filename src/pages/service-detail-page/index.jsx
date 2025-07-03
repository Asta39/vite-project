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

const ServiceDetailPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);


  const serviceData = services["large-format"];
  // Mock service data
   

    const pageTitle = `${serviceData.title} in Nairobi | Luna Graphics`;
  const pageDescription = `Expert ${serviceData.title} in Nairobi. We use high-precision machines for any type of large format printing materials. Get a free quote for your custom large format printing project today at Luna Graphics.`;
  const pageUrl = `https://lunagraphics.co.ke/service-detail-page`; // Use the actual URL for this page
  const imageUrl = serviceData.heroImage; // Use this page's hero image for social sharing
  const brandName = "Luna Graphics";
  const twitterHandle = "@YourTwitterHandle"; // Replace with your handle


  const equipmentData = [
    {
      name: "HP Latex 570 Printer",
      description: "Professional large format printer delivering exceptional quality with eco-friendly latex inks.",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "1.37m x 50m",
      capabilities: [
        "Latex ink technology",
        "Scratch and water resistant",
        "Odorless prints",
        "Indoor/outdoor applications"
      ]
    },
    {
      name: "Roland VersaCAMM VS-640i",
      description: "Integrated print and cut solution for precision graphics and signage production.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "1.6m x 25m",
      capabilities: [
        "Print and cut in one pass",
        "Eco-solvent inks",
        "Contour cutting",
        "Kiss cut and through cut"
      ]
    },
    {
      name: "Mimaki JV300-160",
      description: "High-speed solvent printer for outdoor signage and vehicle graphics.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "1.6m x 50m",
      capabilities: [
        "High-speed printing",
        "Durable solvent inks",
        "Variable droplet technology",
        "Unattended printing"
      ]
    }
  ];

  const sampleGalleryData = [
    {
      id: 1,
      title: "Corporate Banner",
      category: "Banners",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Event Backdrop",
      category: "Backdrops",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Retail Signage",
      category: "Signage",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Trade Show Display",
      category: "Displays",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Vehicle Graphics",
      category: "Vehicle Wraps",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Building Wrap",
      category: "Building Wraps",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Conference Banner",
      category: "Banners",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Stadium Graphics",
      category: "Sports Graphics",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop"
    }
  ];

  const pricingPackages = [
    {
      name: "Basic Package",
      description: "Perfect for small businesses and events",
      price: 1500,
      originalPrice: 2000,
      unit: "sq meter",
      popular: false,
      turnaround: "3-5 days",
      features: [
        "Standard vinyl material",
        "Basic design consultation",
        "Digital proof included",
        "Standard finishing",
        "Free delivery within Nairobi",
        "1-year color guarantee"
      ]
    },
    {
      name: "Professional Package",
      description: "Most popular choice for businesses",
      price: 2500,
      originalPrice: 3200,
      unit: "sq meter",
      popular: true,
      turnaround: "24-48 hours",
      features: [
        "Premium vinyl material",
        "Professional design service",
        "Multiple design revisions",
        "Lamination included",
        "Grommets and hemming",
        "Rush delivery available",
        "2-year color guarantee",
        "Installation service available"
      ]
    },
    {
      name: "Enterprise Package",
      description: "For large campaigns and corporations",
      price: 4000,
      unit: "sq meter",
      popular: false,
      turnaround: "24 hours",
      features: [
        "Premium specialty materials",
        "Dedicated project manager",
        "Unlimited design revisions",
        "Premium finishing options",
        "Installation included",
        "Same-day rush available",
        "3-year color guarantee",
        "Volume discounts",
        "Priority support"
      ]
    }
  ];

  const relatedServicesData = [
    {
      title: "Digital Printing",
     
      category: "Print Services",
      description: "High-quality digital printing for business cards, flyers, brochures, and marketing materials.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      startingPrice: 50,
      turnaround: "Same day",
      features: ["High Resolution", "Multiple Formats", "Fast Turnaround"]
    },
    {
      title: "UV Printing",
      path: "/uv-printing-services-page",
      category: "Specialty Printing",
      description: "Direct UV printing on various materials including glass, metal, wood, and plastics.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      startingPrice: 200,
      turnaround: "2-3 days",
      features: ["Direct Material Printing", "Durable Finish", "Vibrant Colors"]
    },
    {
      title: "CNC Cutting",
      path: "/cnc-cutting-services-page",
      category: "Fabrication",
      description: "Precision CNC cutting services for signage, displays, and custom fabrication projects.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
      startingPrice: 300,
      turnaround: "3-5 days",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"]
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

export default ServiceDetailPage;