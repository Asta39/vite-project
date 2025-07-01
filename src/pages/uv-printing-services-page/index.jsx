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

// === NEW COMPONENT: Quote Modal ===
// This component handles capturing user info for a quote request.
const QuoteModal = ({ isOpen, onClose, onSubmit, quoteDetails }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '' });
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit(formData);
    // The parent component will close the modal after submission
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 w-11/12 max-w-md m-4 transform transition-all">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold font-heading text-primary">Get a Quote</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">×</button>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-sm text-gray-600">You are requesting a quote for:</p>
          <p className="font-semibold text-gray-800">{quoteDetails.service}</p>
          {quoteDetails.package && (
            <p className="font-semibold text-gray-800">Package: <span className="text-secondary">{quoteDetails.package}</span></p>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit on WhatsApp'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const UVPrintingServicesPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  // --- STATE FOR MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);


  // UV Printing service specific data
  const serviceData = {
    id: 3,
    title: "UV Printing Services",
    category: "Specialty Printing",
    description: "Advanced UV printing services for premium materials and custom applications offering exceptional durability, vibrant colors, and versatile substrate compatibility.",
    detailedDescription: `Our UV printing services showcase cutting-edge technology that delivers superior print quality on an extensive range of materials. Unlike traditional printing methods, UV printing cures ink instantly using ultraviolet light, resulting in scratch-resistant, waterproof, and fade-resistant prints.\n\nWe specialize in direct-to-substrate printing on glass, metal, wood, acrylic, ceramics, and various rigid materials. This technology opens up unlimited creative possibilities for promotional items, signage, decorative panels, and custom applications that traditional printing cannot achieve.\n\nOur UV printing process is environmentally friendly, using eco-solvent inks with no volatile organic compounds (VOCs), making it safe for indoor applications and reducing environmental impact while maintaining exceptional print quality and durability.`,
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    startingPrice: 800,
    turnaround: "2-3 days",
    minimumOrder: "1 piece",
    keyFeatures: [
      "Direct Material Printing",
      "Instant Curing",
      "Eco-Friendly Inks",
      "Superior Durability"
    ],
    specifications: [
      {
        icon: "Layers",
        title: "Substrate Range",
        description: "Glass, metal, wood, acrylic, ceramics, and rigid materials"
      },
      {
        icon: "Palette",
        title: "Color Gamut",
        description: "Wide color gamut with vibrant, true-to-life reproduction"
      },
      {
        icon: "Shield",
        title: "Durability",
        description: "Scratch, water, and UV resistant with long-lasting colors"
      },
      {
        icon: "Zap",
        title: "Resolution",
        description: "Up to 1200 DPI for fine detail reproduction"
      },
      {
        icon: "Leaf",
        title: "Eco-Friendly",
        description: "VOC-free inks with minimal environmental impact"
      },
      {
        icon: "Settings",
        title: "Finish Options",
        description: "Matte, gloss, textured, and special effect finishes"
      }
    ],
    materials: [
      "Tempered Glass",
      "Acrylic Sheets",
      "Aluminum Panels",
      "Wood Substrates",
      "Ceramic Tiles",
      "PVC Boards",
      "Metal Sheets",
      "Foam Board",
      "Corrugated Plastic",
      "Polycarbonate",
      "Dibond",
      "Mirror Surfaces"
    ]
  };

  const equipmentData = [
    {
      name: "Roland LEF2-200 UV Printer",
      description: "Professional flatbed UV printer for direct printing on various rigid materials with exceptional quality.",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "770mm x 330mm",
      capabilities: [
        "Direct substrate printing",
        "Variable droplet technology",
        "White and clear ink options",
        "Multilayer printing capability"
      ]
    },
    {
      name: "Mimaki UJF-7151plus",
      description: "Advanced UV-LED inkjet printer offering high-speed printing with superior quality on diverse materials.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "711mm x 508mm",
      capabilities: [
        "UV-LED instant curing",
        "2.5D textured printing",
        "Primer and varnish printing",
        "High-speed production"
      ]
    },
    {
      name: "HP Stitch S500",
      description: "High-performance UV printer designed for promotional products and custom applications.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "635mm x 508mm",
      capabilities: [
        "Water-based UV inks",
        "Stretch and flexibility",
        "Fast production speeds",
        "Consistent color accuracy"
      ]
    }
  ];

  const sampleGalleryData = [
    {
      id: 1,
      title: "Glass Panel Signage",
      category: "Glass",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Metal Wall Art",
      category: "Metal",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Acrylic Display",
      category: "Acrylic",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Wood Promotional Item",
      category: "Wood",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Ceramic Tile Design",
      category: "Ceramic",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Phone Case Printing",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Decorative Panel",
      category: "Decoration",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Award Plaque",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop"
    }
  ];

  const pricingPackages = [
    {
      name: "Standard UV Package",
      description: "Perfect for promotional items and small projects",
      price: 1200,
      originalPrice: 1600,
      unit: "per piece",
      popular: false,
      turnaround: "3-5 days",
      features: [
        "Standard substrate options",
        "Single-sided printing",
        "Basic color matching",
        "Standard resolution",
        "Free design consultation",
        "Quality guarantee"
      ]
    },
    {
      name: "Professional UV Package",
      description: "Most popular for business applications",
      price: 2000,
      originalPrice: 2800,
      unit: "per piece",
      popular: true,
      turnaround: "2-3 days",
      features: [
        "Premium substrate options",
        "Double-sided printing available",
        "Color-accurate proofing",
        "High-resolution printing",
        "White and clear ink options",
        "Rush service available",
        "Professional finishing",
        "Custom size accommodation"
      ]
    },
    {
      name: "Premium UV Package",
      description: "For high-end applications and volume orders",
      price: 3500,
      unit: "per piece",
      popular: false,
      turnaround: "24-48 hours",
      features: [
        "Specialty substrate materials",
        "Multi-layer printing effects",
        "Textured 2.5D printing",
        "Custom color matching",
        "Priority production",
        "Same-day rush available",
        "Premium packaging",
        "Volume discounts",
        "Dedicated project manager"
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
      title: "CNC Cutting",
      category: "Fabrication",
      description: "Precision CNC cutting services for signage, displays, and custom fabrication projects.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
      startingPrice: 300,
      turnaround: "3-5 days",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"]
    },
    {
      title: "Laser Engraving",
      category: "Engraving",
      description: "Professional laser engraving services for promotional items and custom applications.",
      image: "https://images.unsplash.com/photo-1581092918484-8313de0f6f9d?w=400&h=300&fit=crop",
      startingPrice: 250,
      turnaround: "1-2 days",
      features: ["Precision Engraving", "Various Materials", "Custom Designs"]
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

  // --- UPDATED FUNCTION: Opens the modal ---
  const handleGetQuote = (packageData = null) => {
    setCurrentQuote({
      service: serviceData.title,
      package: packageData?.name
    });
    setIsModalOpen(true);
  };

  // --- NEW FUNCTION: Handles modal submission and opens WhatsApp ---
  const handleQuoteSubmit = (formData) => {
    const phoneNumber = '254791159618'; // No need for '+'
    const { name, email, phone } = formData;
    
    let message = `*New Quote Request*\n\n` +
                  `*Name:* ${name}\n` +
                  `*Email:* ${email}\n` +
                  `*Phone:* ${phone}\n\n` +
                  `*Service Requested:* ${currentQuote.service}`;
    
    if (currentQuote.package) {
      message += `\n*Package:* ${currentQuote.package}`;
    }
    
    message += `\n\nPlease provide a quote for the details above. Thank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Close the modal after a short delay to allow the new tab to open
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };


  const handleWhatsAppChat = () => {
    const phoneNumber = '254791159618';
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
      
      {/* --- RENDER THE MODAL HERE --- */}
      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleQuoteSubmit}
        quoteDetails={currentQuote}
      />
      
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
                <li>+254 791 159 618</li>
                <li>info.lunagraphics@gmail.com</li>
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

export default UVPrintingServicesPage;