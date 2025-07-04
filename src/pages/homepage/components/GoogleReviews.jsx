import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { reviews } from '../../../data/reviewsData'; // 1. Import your new central data

const GoogleReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  // 2. The old, hardcoded 'reviews' array is now DELETED from this file.

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Increased interval slightly for better readability

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "#FFC107" : "#E9ECEF"}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-success-100 rounded-full">
            <Icon name="Star" size={16} color="var(--color-success)" className="mr-2" />
            <span className="text-sm font-semibold text-success-700">Google Reviews</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            What Our Clients
            <span className="block text-primary">Say About Us</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold text-text-primary">4.9</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <span className="text-text-secondary">Based on 150+ Google Reviews</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>
              
              <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed mb-6">
                "{reviews[currentReview].review}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={reviews[currentReview].avatar} // This will now use your placeholder
                  alt={reviews[currentReview].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-text-primary">
                    {reviews[currentReview].name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {reviews[currentReview].service} • {reviews[currentReview].date}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <button onClick={handlePrevious} className="w-10 h-10 bg-surface-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-200">
                <Icon name="ChevronLeft" size={20} />
              </button>
              
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button key={index} onClick={() => setCurrentReview(index)} className={`w-2 h-2 rounded-full transition-colors duration-200 ${ index === currentReview ? 'bg-primary' : 'bg-surface-300' }`} />
                ))}
              </div>
              
              <button onClick={handleNext} className="w-10 h-10 bg-surface-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-200">
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Google Badge */}
          
            {/* ... Badge JSX ... */}
                      <div className="absolute -top-4 -right-4 bg-background rounded-lg shadow-lg p-4 border border-border">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Google</div>
                <div className="text-xs text-text-secondary">Verified Reviews</div>
              </div>
            </div>
          </div>
        </div>
          
        

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Join hundreds of satisfied customers who trust Luna Graphics for their printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact-page')}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Start Your Project
            </button>
            <button
              onClick={() => window.open('https://www.google.com/search?q=Luna+Graphics+LTD+reviews#', '_blank')}
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Read All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;