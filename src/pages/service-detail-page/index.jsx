// src/pages/service-detail-page/index.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../../data/serviceData';

// --- 1. UPDATED, CORRECT IMPORT PATHS ---
import Header from '../../components/ui/Header';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceDetails from '../../components/services/ServiceDetails';
import EquipmentShowcase from '../../components/services/EquipmentShowcase';
import SampleGallery from '../../components/services/SampleGallery';
import PricingTable from '../../components/services/PricingTable';
import RelatedServices from '../../components/services/RelatedServices';
import ContactForm from '../../components/services/ContactForm';
import Breadcrumb from '../../components/services/Breadcrumb';
import logoImage from '../../assets/luna-logo2.png';

const ServiceDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 2. This page is now dynamic. It gets the key from the navigation state.
  // We use 'large-format' as a safe default if no key is provided.
  const serviceKey = location.state?.serviceKey || 'large-format';
  
  // 3. Look up the correct service data from your central object
  const pageData = services[serviceKey];

  // 4. Handle the case where the data might not be found
  if (!pageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <p>The requested service data ('{serviceKey}') could not be found.</p>
        </div>
      </div>
    );
  }

  // 5. Setup SEO variables using the dynamically loaded pageData
  const pageTitle = `${pageData.title} | Luna Graphics`;
  const pageDescription = pageData.description;
  const pageUrl = `https://lunagraphics.co.ke${pageData.path || ''}`;
  const imageUrl = pageData.heroImage;
  const brandName = "Luna Graphics";
  const twitterHandle = "@YourTwitterHandle";

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: pageData.title, path: null }
  ];

  const handleGetQuote = (packageData = null) => {
    navigate('/contact-page', { state: { service: pageData.title, package: packageData?.name } });
  };

  const handleWhatsAppChat = () => {
    const phoneNumber = '254791159618';
    const message = `Hello! I'm interested in ${pageData.title} services.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={brandName} />
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
        
        <ServiceHero service={pageData} onGetQuote={handleGetQuote} onWhatsAppChat={handleWhatsAppChat} />
        <ServiceDetails service={pageData} />
        <EquipmentShowcase equipment={pageData.equipment} />
        <SampleGallery samples={pageData.gallery} />
        <PricingTable pricingPackages={pageData.pricing} />
        <RelatedServices relatedServices={pageData.related} />
        <ContactForm serviceName={pageData.title} />
      </main>
      
      <footer className="bg-primary text-white py-12">
        {/* ... your footer JSX ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logoImage} 
                  alt="Luna Graphics Logo" 
                  className="w-12 h-12 rounded-lg object-cover" // Added size and rounded corners
                />
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
                <li>‪+254 791 159 618‬ </li>
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

export default ServiceDetailPage;