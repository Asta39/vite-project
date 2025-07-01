import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+254700000000';
    const message = 'Hello! I would like to inquire about your printing services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSocialClick = (platform) => {
    const urls = {
      facebook: 'https://facebook.com/halocreatives',
      instagram: 'https://instagram.com/halocreatives',
      twitter: 'https://twitter.com/halocreatives',
      linkedin: 'https://linkedin.com/company/halocreatives'
    };
    window.open(urls[platform], '_blank');
  };

  const quickLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Services', path: '/service-detail-page' },
    { label: 'Corporate Solutions', path: '/corporate-services-page' },
    { label: 'Gallery', path: '/gallery-page' },
    { label: 'Our Team', path: '/team-page' },
    { label: 'Contact', path: '/contact-page' }
  ];

  const services = [
    'Large Format Printing',
    'UV Printing',
    'T-shirt Printing',
    'CNC Cutting',
    'Laser Cutting',
    'Plotting Services'
  ];

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
        <Icon name="Printer" size={24} color="white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-heading font-bold text-primary">Halo</span>
        <span className="text-sm font-heading font-semibold text-secondary">Creatives</span>
      </div>
    </div>
  );

  return (
    <footer className="bg-surface-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-surface-300 leading-relaxed">
              Nairobi's premier printing and design services company. We deliver high-quality 
              printing solutions with cutting-edge technology and expert craftsmanship.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} color="var(--color-accent)" />
                <span className="text-sm text-surface-300">
                  Industrial Area, Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} color="var(--color-accent)" />
                <span className="text-sm text-surface-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} color="var(--color-accent)" />
                <span className="text-sm text-surface-300">info@halocreatives.co.ke</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: 'Facebook', platform: 'facebook' },
                { icon: 'Instagram', platform: 'instagram' },
                { icon: 'Twitter', platform: 'twitter' },
                { icon: 'Linkedin', platform: 'linkedin' }
              ].map((social) => (
                <button
                  key={social.platform}
                  onClick={() => handleSocialClick(social.platform)}
                  className="w-10 h-10 bg-surface-700 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name={social.icon} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-surface-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavigation('/service-detail-page')}
                    className="text-surface-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Business Hours</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-surface-300">Monday - Friday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-surface-300">Saturday</span>
                <span className="text-white">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-surface-300">Sunday</span>
                <span className="text-white">Closed</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-accent hover:bg-accent-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Icon name="MessageCircle" size={18} />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-surface-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-surface-300">
              © {currentYear} Halo Creatives. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-surface-300">
              <button className="hover:text-accent transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-accent transition-colors duration-200">
                Terms of Service
              </button>
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <Icon name="Heart" size={14} color="var(--color-error)" className="fill-current" />
                <span>in Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;