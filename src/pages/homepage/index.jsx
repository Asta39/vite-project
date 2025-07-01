import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import MachineShowcase from './components/MachineShowcase';
import GoogleReviews from './components/GoogleReviews';
import CorporateServices from './components/CorporateServices';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Luna Graphics - Premier Printing Services in Nairobi, Kenya</title>
        <meta 
          name="description" 
          content="Professional printing services in Nairobi. Large format printing, UV printing, T-shirt printing, CNC cutting, and more. Fast turnaround, quality guaranteed. Serving Kenya since 2013." 
        />
        <meta 
          name="keywords" 
          content="printing services Nairobi, large format printing Kenya, UV printing, T-shirt printing, CNC cutting, laser cutting, political campaign materials, election printing 2027" 
        />
        <meta name="author" content="Luna Graphics" />
        <meta property="og:title" content="Luna Graphics - Premier Printing Services in Nairobi" />
        <meta 
          property="og:description" 
          content="Printing services Nairobi, large format printing Kenya, UV printing, T-shirt printing, CNC cutting, laser cutting, political campaign materials, election printing 2027." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lunagraphics.co.ke" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luna Graphics - Premier Printing Services" />
        <meta 
          name="twitter:description" 
          content="Quality printing services in Nairobi. Large format, UV printing, custom merchandise and more." 
        />
        <link rel="canonical" href="https://lunagraphics.co.ke" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Services Grid */}
          <ServicesGrid />

          {/* Machine Showcase */}
          <MachineShowcase />

          {/* Google Reviews */}
          <GoogleReviews />

          {/* Corporate Services */}
          <CorporateServices />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;