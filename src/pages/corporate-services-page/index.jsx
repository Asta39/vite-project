import React from 'react';
import { Helmet } from 'react-helmet-async';
import { services } from '../../data/serviceData';

import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicePackages from './components/ServicePackages';
import EquipmentCapabilities from './components/EquipmentCapabilities';
import CaseStudies from './components/CaseStudies';
import ComplianceSection from './components/ComplianceSection';
import CorporateQuoteForm from './components/CorporateQuoteForm';

import logoImage from '../../assets/luna-logo2.png';


const pageTitle = `Corporate Services in Nairobi | Luna Graphics`;
  const pageDescription = `Expert corporate services in Nairobi. Kenya's leading corporate printing partner, specializing in large-scale political campaigns, 
                corporate branding, and high-volume commercial printing solutions. Contact us today for a free quote.`;
  const pageUrl = `https://lunagraphics.co.ke/corporate-services-page`; // Use the actual URL for this page
    const imageUrl = "https://lunagraphics.co.ke/social-sharing-image.jpg"; // Use this page's hero image for social sharing
  const brandName = "Luna Graphics";
  const twitterHandle = "@YourTwitterHandle"; // Replace with your handle

const CorporateServicesPage = () => {
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
      
      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <ServicePackages />
        <EquipmentCapabilities />
        <CaseStudies />
        <ComplianceSection />
        <CorporateQuoteForm />
      </main>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={logoImage} 
                  alt="Luna Graphics Logo" 
                  className="w-12 h-12 rounded-lg object-cover" // Added size and rounded corners
                />
                <div>
                  <div className="text-xl font-heading font-bold">Luna Graphics</div>
                  <div className="text-sm text-primary-200">Corporate Printing Solutions</div>
                </div>
              </div>
              <p className="text-primary-200 mb-6 max-w-md">
                Kenya's leading corporate printing partner, specializing in large-scale political campaigns, 
                corporate branding, and high-volume commercial printing solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">Ig</span>
                </div>
                <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">P</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Corporate Services</h4>
              <ul className="space-y-3 text-primary-200">
                <li><a href="#" className="hover:text-white transition-colors">Election Campaigns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Branding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Large Format Printing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Event Materials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Merchandise</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4 text-primary-200">
                <div>
                  <div className="font-medium text-white">Corporate Hotline</div>
                  <div>+254 791 159 618</div>
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div>info.lunagraphics@gmail.com</div>
                </div>
                <div>
                  <div className="font-medium text-white">Address</div>
                  <div>Kweria Road, Nairobi<br />Kenya</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-primary-200 text-sm">
              © {new Date().getFullYear()} Luna Graphics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-200 mt-4 lg:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Corporate Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateServicesPage;