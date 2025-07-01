import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    {
      label: 'Services',
      path: '/services',
      icon: 'Settings',
      hasDropdown: true,
      dropdownItems: [
        {
          label: 'Large Format Printing',
          path: '/service-detail-page',
          icon: 'Printer',
          description: 'Banners, posters, and signage'
        },
        {
          label: 'CNC Cutting',
          path: '/cnc-cutting-services-page',
          icon: 'Monitor',
          description: 'Acrylic Signages, Wood Engraving, Metal Cutting'
        },
        {
          label: 'Laser Cutting',
          path: '/laser-cutting-services-page',
          icon: 'FileText',
          description: 'Acrylic cutting, Wood engraving, Custom Design'
        },
        {
          label: 'Custom Merchandise',
          path: '/t-shirt-printing-services-page',
          icon: 'ShoppingBag',
          description: 'T-shirts, mugs, promotional items'
        },
        {
          label: 'Plotting Services',
          path: '/plotting-services-page',
          icon: 'BookOpen',
          description: 'Posters, Banners, Technical drawings'
        },
        {
          label: 'UV Printing',
          path: '/uv-printing-services-page',
          icon: 'Palette',
          description: 'Acrylic wall art, Nameplates, and custom prints'
        }
      ]
    },
    { label: 'Corporate Solutions', path: '/corporate-services-page', icon: 'Building2' },
    { label: 'Gallery', path: '/gallery-page', icon: 'Image' },
    { label: 'Our Team', path: '/team-page', icon: 'Users' },
    { label: 'Contact', path: '/contact-page', icon: 'Phone' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '254791159618';
    const message = 'Hello! I would like to inquire about your printing services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
        <Icon name="Printer" size={24} color="white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-heading font-bold text-primary">Luna</span>
        <span className="text-sm font-heading font-semibold text-secondary">Graphics</span>
      </div>
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigation('/homepage')}
          >
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                {item.hasDropdown ? (
                  <button
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 hover:text-primary ${
                      location.pathname.includes('/service-detail-page') 
                        ? 'text-primary border-b-2 border-primary' :'text-text-secondary hover:text-primary'
                    }`}
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                  >
                    <span>{item.label}</span>
                    <Icon 
                      name="ChevronDown" 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <button
                    className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActivePath(item.path)
                        ? 'text-primary border-b-2 border-primary' :'text-text-secondary hover:text-primary'
                    }`}
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.label}
                  </button>
                )}

                {/* Services Dropdown */}
                {item.hasDropdown && servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-background rounded-lg shadow-lg border border-border z-1100 animate-slide-down"
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-4 grid grid-cols-1 gap-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          className="flex items-start space-x-3 p-3 rounded-md hover:bg-surface-100 transition-colors duration-200 text-left"
                          onClick={() => handleNavigation(dropdownItem.path)}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-md flex items-center justify-center">
                            <Icon name={dropdownItem.icon} size={16} color="var(--color-primary)" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-text-primary">
                              {dropdownItem.label}
                            </div>
                            <div className="text-xs text-text-secondary mt-1">
                              {dropdownItem.description}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppClick}
              className="text-accent border-accent hover:bg-accent hover:text-white"
            >
              WhatsApp
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavigation('/contact-page')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-1200 bg-background/95 backdrop-blur-md">
          <div 
            ref={mobileMenuRef}
            className="bg-background border-t border-border shadow-lg animate-slide-down"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-text-primary">
                          {item.label}
                        </span>
                        <Icon name="ChevronRight" size={16} color="var(--color-text-secondary)" />
                      </div>
                      <div className="pl-4 space-y-3">
                        {item.dropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem.label}
                            className="flex items-center space-x-3 w-full p-3 rounded-md hover:bg-surface-100 transition-colors duration-200 text-left"
                            onClick={() => handleNavigation(dropdownItem.path)}
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-md flex items-center justify-center">
                              <Icon name={dropdownItem.icon} size={16} color="var(--color-primary)" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-text-primary">
                                {dropdownItem.label}
                              </div>
                              <div className="text-xs text-text-secondary">
                                {dropdownItem.description}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      className={`flex items-center space-x-3 w-full p-3 rounded-md transition-colors duration-200 text-left ${
                        isActivePath(item.path)
                          ? 'bg-primary-50 text-primary' :'text-text-secondary hover:bg-surface-100 hover:text-primary'
                      }`}
                      onClick={() => handleNavigation(item.path)}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              <div className="pt-6 border-t border-border space-y-3">
                <Button
                  variant="outline"
                  size="md"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={handleWhatsAppClick}
                  className="w-full text-accent border-accent hover:bg-accent hover:text-white"
                  fullWidth
                >
                  WhatsApp Us
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleNavigation('/contact-page')}
                  fullWidth
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;