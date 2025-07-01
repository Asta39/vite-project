import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';


const SampleGallery = ({ samples }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const categories = ['All', ...new Set(samples.map(sample => sample.category))];
  
  const filteredSamples = selectedCategory === 'All' 
    ? samples 
    : samples.filter(sample => sample.category === selectedCategory);

  const openModal = (sample) => {
    setSelectedImage(sample);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredSamples.findIndex(sample => sample.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredSamples.length;
    setSelectedImage(filteredSamples[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredSamples.findIndex(sample => sample.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredSamples.length - 1 : currentIndex - 1;
    setSelectedImage(filteredSamples[prevIndex]);
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Sample Work Gallery
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing the quality and variety of our printing services.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface-100 text-text-secondary hover:bg-surface-200 hover:text-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              className="group relative aspect-square bg-surface-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => openModal(sample)}
            >
              <Image
                src={sample.image}
                alt={sample.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={32} color="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-sm mb-1">{sample.title}</h3>
                <p className="text-white/80 text-xs">{sample.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredSamples.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Image" size={48} color="var(--color-text-muted)" className="mx-auto mb-4" />
            <p className="text-text-muted">No samples found for the selected category.</p>
          </div>
        )}
      </div>
      
      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Icon name="X" size={20} color="white" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Icon name="ChevronLeft" size={24} color="white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Icon name="ChevronRight" size={24} color="white" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video max-h-[70vh]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary bg-surface-100 px-3 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="text-sm text-text-muted">
                    {filteredSamples.findIndex(s => s.id === selectedImage.id) + 1} of {filteredSamples.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleGallery;