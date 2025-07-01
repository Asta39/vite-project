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

const TShirtPrintingServicesPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  // T-shirt Printing service specific data
  const serviceData = {
    id: 6,
    title: "T-shirt Printing Services",
    category: "Custom Apparel",
    description: "Professional custom t-shirt printing services targeting businesses, events, and personal branding needs with comprehensive printing method options and bulk pricing in KES currency.",
    detailedDescription: `Our T-shirt Printing Services showcase custom apparel printing capabilities for businesses, events, and personal branding with various printing methods and competitive bulk pricing. Using mobile-first responsive approach, we deliver high-quality custom t-shirts with vibrant designs and exceptional durability.\n\nWhether you need promotional apparel for corporate events, branded merchandise for your business, or custom designs for personal use, our comprehensive printing methods include screen printing, heat transfer, vinyl cutting, and direct-to-garment printing. Each method is carefully selected based on your design requirements, quantity, and budget.\n\nOur experienced team provides design consultation, artwork requirements guidance, and color matching capabilities to ensure your vision becomes reality. With quick turnaround times and competitive KES pricing, we make custom apparel accessible for projects of all sizes.`,
    heroImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
    startingPrice: 450,
    turnaround: "3-5 days",
    minimumOrder: "10 pieces",
    keyFeatures: [
      "Multiple Printing Methods",
      "Bulk Pricing Available",
      "Custom Design Service",
      "Quick Turnaround"
    ],
    specifications: [
      {
        icon: "Palette",
        title: "Printing Methods",
        description: "Screen print, heat transfer, vinyl cutting, DTG printing"
      },
      {
        icon: "Shirt",
        title: "Garment Options",
        description: "Cotton, polyester, blends, hoodies, polo shirts, tank tops"
      },
      {
        icon: "Maximize",
        title: "Print Areas",
        description: "Front, back, sleeves, chest pocket designs available"
      },
      {
        icon: "Palette",
        title: "Color Options",
        description: "Full-color prints, spot colors, metallic, glow-in-dark"
      },
      {
        icon: "Users",
        title: "Bulk Orders",
        description: "Competitive pricing for 50+ pieces with volume discounts"
      },
      {
        icon: "Clock",
        title: "Rush Orders",
        description: "Express 24-48 hour service available for urgent needs"
      }
    ],
    materials: [
      "100% Cotton T-shirts",
      "Cotton-Polyester Blends",
      "Performance Polyester",
      "Premium Cotton",
      "Hoodies & Sweatshirts",
      "Polo Shirts",
      "Tank Tops",
      "Long Sleeve Shirts",
      "V-neck T-shirts",
      "Organic Cotton",
      "Moisture-Wicking Fabric",
      "Fashion Fit Shirts"
    ]
  };

  const equipmentData = [
    {
      name: "Direct-to-Garment Printer",
      description: "Professional DTG printer for high-quality full-color designs with photographic detail on cotton garments.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "A3+ print area (16\" x 20\")",
      capabilities: [
        "Full-color printing",
        "Photo-quality results",
        "Water-based eco inks",
        "Soft hand feel"
      ]
    },
    {
      name: "Heat Transfer Vinyl Cutter",
      description: "Precision vinyl cutting system for creating durable, professional heat transfer designs and logos.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "24-inch cutting width",
      capabilities: [
        "Precision cutting",
        "Various vinyl materials",
        "Weeding tools included",
        "Long-lasting adhesion"
      ]
    },
    {
      name: "Screen Printing Setup",
      description: "Professional screen printing equipment for high-volume orders with consistent color reproduction.",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Multiple screen sizes available",
      capabilities: [
        "High-volume production",
        "Consistent color matching",
        "Multiple ink types",
        "Cost-effective for bulk"
      ]
    }
  ];

  const sampleGalleryData = [
    {
      id: 1,
      title: "Corporate Branded Shirts",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Event T-shirts",
      category: "Events",
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e4b?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Team Sports Jerseys",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Custom Hoodies",
      category: "Hoodies",
      image: "https://images.unsplash.com/photo-1556821840-3a9c6b76cef1?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Promotional Polo Shirts",
      category: "Promotional",
      image: "https://images.unsplash.com/photo-1594938291221-94f18659adb8?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Custom Art Designs",
      category: "Artistic",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      title: "School Uniforms",
      category: "School",
      image: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Band Merchandise",
      category: "Merchandise",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop"
    }
  ];

  const pricingPackages = [
    {
      name: "Starter Package",
      description: "Perfect for small events and personal projects",
      price: 650,
      originalPrice: 800,
      unit: "per shirt",
      popular: false,
      turnaround: "5-7 days",
      features: [
        "10-24 pieces minimum",
        "Single color design",
        "Standard cotton shirts",
        "Front print only",
        "Basic design consultation",
        "Free delivery in Nairobi"
      ]
    },
    {
      name: "Business Package",
      description: "Most popular for corporate and promotional needs",
      price: 450,
      originalPrice: 600,
      unit: "per shirt",
      popular: true,
      turnaround: "3-5 days",
      features: [
        "25-99 pieces",
        "Multi-color designs",
        "Premium cotton options",
        "Front and back printing",
        "Professional design service",
        "Rush delivery available",
        "Size guide assistance",
        "Quality guarantee"
      ]
    },
    {
      name: "Bulk Package",
      description: "Best value for large orders and events",
      price: 350,
      unit: "per shirt",
      popular: false,
      turnaround: "3-5 days",
      features: [
        "100+ pieces volume pricing",
        "Full-color designs available",
        "Premium garment selection",
        "Multiple print locations",
        "Dedicated project manager",
        "Express production available",
        "Custom packaging options",
        "Extended warranty",
        "Account billing available"
      ]
    }
  ];

  const relatedServicesData = [
    {
      title: "Large Format Printing",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and business signage.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["Weather Resistant", "Multiple Sizes", "Fast Turnaround"]
    },
    {
      title: "UV Printing",
      category: "Specialty Printing",
      description: "Direct UV printing on promotional items, phone cases, and custom accessories.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      startingPrice: 800,
      turnaround: "2-3 days",
      features: ["Direct Material Printing", "Durable Finish", "Custom Items"]
    },
    {
      title: "Corporate Services",
      category: "Business Solutions",
      description: "Comprehensive corporate branding and marketing material solutions.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      startingPrice: 1000,
      turnaround: "5-7 days",
      features: ["Brand Consistency", "Volume Discounts", "Account Management"]
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
    const message = `Hello! I'm interested in ${serviceData.title} services. Could you please provide more information about bulk pricing and design options?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleServiceClick = (service) => {
    // Navigate to specific service pages
    if (service.title === "Large Format Printing") {
      navigate('/service-detail-page');
    } else if (service.title === "UV Printing") {
      navigate('/uv-printing-services-page');
    } else if (service.title === "Corporate Services") {
      navigate('/corporate-services-page');
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

export default TShirtPrintingServicesPage;