import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import FilterChips from './components/FilterChips';
import SearchBar from './components/SearchBar';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import Icon from '../../components/AppIcon';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const projectsPerPage = 12;

  // Mock project data
  const mockProjects = [
    {
      id: 1,
      title: "Corporate Branding Package - Safaricom",
      description: "Complete corporate identity package including large format banners, business cards, and promotional materials for Safaricom's new branch opening in Westlands.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      serviceType: "large-format",
      industry: "corporate",
      material: "vinyl",
      scale: "large",
      turnaroundTime: "5 days",
      completedDate: "2024-01-15",
      client: "Safaricom Ltd",
      testimonial: {
        content: "Exceptional quality and timely delivery. The banners looked professional and helped make our branch opening a huge success.",
        author: "Mary Wanjiku, Marketing Manager"
      }
    },
    {
      id: 2,
      title: "Wedding Signage Collection",
      description: "Elegant wedding signage including welcome boards, table numbers, and directional signs printed on premium acrylic with gold lettering.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      serviceType: "uv-printing",
      industry: "events",
      material: "acrylic",
      scale: "small",
      turnaroundTime: "3 days",
      completedDate: "2024-01-20",
      client: "The Wanjiku Wedding",
      testimonial: {
        content: "Beautiful work! The acrylic signs added such an elegant touch to our special day. Highly recommended!",
        author: "Grace Wanjiku, Bride"
      }
    },
    {
      id: 3,
      title: "Restaurant Menu Boards - Java House",
      description: "Durable outdoor menu boards with weather-resistant UV printing for Java House Nairobi branches. Features vibrant food photography and clear pricing.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      serviceType: "uv-printing",
      industry: "hospitality",
      material: "acrylic",
      scale: "medium",
      turnaroundTime: "4 days",
      completedDate: "2024-01-25",
      client: "Java House Africa",
      testimonial: {
        content: "The menu boards have withstood Nairobi weather perfectly. Colors remain vibrant after months of use.",
        author: "Peter Kamau, Operations Manager"
      }
    },
    {
      id: 4,
      title: "School Awards and Certificates",
      description: "Custom laser-cut wooden awards and certificates for Brookhouse School's annual prize-giving ceremony. Intricate designs with school logo engraving.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      serviceType: "laser-cutting",
      industry: "education",
      material: "wood",
      scale: "medium",
      turnaroundTime: "7 days",
      completedDate: "2024-02-01",
      client: "Brookhouse School",
      testimonial: {
        content: "The wooden awards were absolutely stunning. The laser engraving was precise and the finish was perfect.",
        author: "Dr. Sarah Mwangi, Principal"
      }
    },
    {
      id: 5,
      title: "Tech Startup T-shirt Collection",
      description: "Custom branded t-shirts for iHub's annual tech conference. High-quality cotton with vibrant screen printing featuring the event logo and sponsor brands.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
      serviceType: "t-shirt",
      industry: "corporate",
      material: "fabric",
      scale: "bulk",
      turnaroundTime: "6 days",
      completedDate: "2024-02-05",
      client: "iHub Nairobi",
      testimonial: {
        content: "Great quality t-shirts that our conference attendees loved. The printing quality was excellent and colors were vibrant.",
        author: "Mark Kiprotich, Event Coordinator"
      }
    },
    {
      id: 6,
      title: "Hospital Wayfinding System",
      description: "Comprehensive wayfinding signage system for Nairobi Hospital including directional signs, room numbers, and emergency exit signs with CNC-cut precision.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      serviceType: "cnc-cutting",
      industry: "healthcare",
      material: "acrylic",
      scale: "large",
      turnaroundTime: "10 days",
      completedDate: "2024-02-10",
      client: "Nairobi Hospital",
      testimonial: {
        content: "The signage system has greatly improved navigation in our facility. Professional quality and installation.",
        author: "Dr. James Mwangi, Administrator"
      }
    },
    {
      id: 7,
      title: "Retail Store Display Graphics",
      description: "Eye-catching retail display graphics for Nakumatt supermarket including promotional banners, shelf talkers, and window graphics to boost sales.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      serviceType: "large-format",
      industry: "retail",
      material: "vinyl",
      scale: "large",
      turnaroundTime: "4 days",
      completedDate: "2024-02-15",
      client: "Nakumatt Holdings",
      testimonial: {
        content: "The graphics significantly improved our store's visual appeal and helped increase foot traffic and sales.",
        author: "Susan Njeri, Store Manager"
      }
    },
    {
      id: 8,
      title: "Architectural Plans Plotting",
      description: "Large format architectural drawings and engineering plans for Nairobi's new shopping mall development. Precise plotting on technical paper.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      serviceType: "plotting",
      industry: "corporate",
      material: "paper",
      scale: "medium",
      turnaroundTime: "2 days",
      completedDate: "2024-02-20",
      client: "Architectural Associates",
      testimonial: {
        content: "Precise and professional plotting service. The technical drawings were exactly what we needed for our presentation.",
        author: "Eng. David Kiprop, Project Manager"
      }
    },
    {
      id: 9,
      title: "Event Backdrop and Banners",
      description: "Large format event backdrop and promotional banners for Tusker Project Fame finale. Vibrant colors and weather-resistant materials for outdoor use.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      serviceType: "large-format",
      industry: "events",
      material: "vinyl",
      scale: "large",
      turnaroundTime: "3 days",
      completedDate: "2024-02-25",
      client: "East African Breweries",
      testimonial: {
        content: "The backdrop looked amazing on TV and the banners withstood the outdoor conditions perfectly.",
        author: "Alice Wanjiru, Event Producer"
      }
    },
    {
      id: 10,
      title: "Custom Metal Signage",
      description: "Precision laser-cut metal signage for Kenyatta University's new science building. Stainless steel with brushed finish and raised lettering.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      serviceType: "laser-cutting",
      industry: "education",
      material: "metal",
      scale: "medium",
      turnaroundTime: "8 days",
      completedDate: "2024-03-01",
      client: "Kenyatta University",
      testimonial: {
        content: "The metal signage looks professional and durable. Perfect for our new building's modern aesthetic.",
        author: "Prof. Margaret Kinyua, Dean"
      }
    },
    {
      id: 11,
      title: "Sports Team Jerseys",
      description: "Custom football jerseys for Gor Mahia FC supporters club with sublimation printing. High-performance fabric with moisture-wicking properties.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
      serviceType: "t-shirt",
      industry: "events",
      material: "fabric",
      scale: "bulk",
      turnaroundTime: "5 days",
      completedDate: "2024-03-05",
      client: "Gor Mahia Supporters Club",
      testimonial: {
        content: "Amazing quality jerseys! The colors are vibrant and the fabric is comfortable for match days.",
        author: "John Ochieng, Club Chairman"
      }
    },
    {
      id: 12,
      title: "Hotel Room Signage",
      description: "Elegant room number signs and directional signage for Serena Hotel Nairobi. UV-printed acrylic with gold accents matching the hotel's luxury aesthetic.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      serviceType: "uv-printing",
      industry: "hospitality",
      material: "acrylic",
      scale: "large",
      turnaroundTime: "6 days",
      completedDate: "2024-03-10",
      client: "Serena Hotels",
      testimonial: {
        content: "The signage perfectly complements our hotel\'s luxury brand. Guests frequently compliment the elegant design.",
        author: "Michael Waweru, General Manager"
      }
    }
  ];

  // Initialize projects and handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Simulate loading
    setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects.slice(0, projectsPerPage));
      setLoading(false);
    }, 1000);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = [...mockProjects];

    // Apply filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(project => {
        return activeFilters.every(filter => {
          switch (filter.category) {
            case 'service':
              return project.serviceType === filter.value;
            case 'industry':
              return project.industry === filter.value;
            case 'material':
              return project.material === filter.value;
            case 'scale':
              return project.scale === filter.value;
            default:
              return true;
          }
        });
      });
    }

    // Apply search
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.client.toLowerCase().includes(searchLower) ||
        project.serviceType.toLowerCase().includes(searchLower) ||
        project.industry.toLowerCase().includes(searchLower)
      );
    }

    // Reset pagination when filters change
    setCurrentPage(1);
    setFilteredProjects(filtered.slice(0, projectsPerPage));
    setHasMore(filtered.length > projectsPerPage);
  }, [activeFilters, searchTerm]);

  const handleFilterToggle = useCallback((category, value, label) => {
    setActiveFilters(prev => {
      const existingIndex = prev.findIndex(
        filter => filter.category === category && filter.value === value
      );
      
      if (existingIndex >= 0) {
        return prev.filter((_, index) => index !== existingIndex);
      } else {
        return [...prev, { category, value, label }];
      }
    });
  }, []);

  const handleClearAllFilters = useCallback(() => {
    setActiveFilters([]);
    setSearchTerm('');
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleLoadMore = useCallback(async () => {
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filtered = [...mockProjects];

    // Apply current filters and search
    if (activeFilters.length > 0) {
      filtered = filtered.filter(project => {
        return activeFilters.every(filter => {
          switch (filter.category) {
            case 'service':
              return project.serviceType === filter.value;
            case 'industry':
              return project.industry === filter.value;
            case 'material':
              return project.material === filter.value;
            case 'scale':
              return project.scale === filter.value;
            default:
              return true;
          }
        });
      });
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.client.toLowerCase().includes(searchLower)
      );
    }

    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * projectsPerPage;
    
    setFilteredProjects(filtered.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
    setHasMore(filtered.length > endIndex);
  }, [activeFilters, searchTerm, currentPage]);

  const handleProjectClick = useCallback((project, index) => {
    setSelectedProject(project);
    setSelectedProjectIndex(index);
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setSelectedProject(null);
  }, []);

  const handleNextProject = useCallback(() => {
    if (selectedProjectIndex < filteredProjects.length - 1) {
      const nextIndex = selectedProjectIndex + 1;
      setSelectedProjectIndex(nextIndex);
      setSelectedProject(filteredProjects[nextIndex]);
    }
  }, [selectedProjectIndex, filteredProjects]);

  const handlePreviousProject = useCallback(() => {
    if (selectedProjectIndex > 0) {
      const prevIndex = selectedProjectIndex - 1;
      setSelectedProjectIndex(prevIndex);
      setSelectedProject(filteredProjects[prevIndex]);
    }
  }, [selectedProjectIndex, filteredProjects]);

  const handleRequestQuote = useCallback((project) => {
    navigate('/contact-page', { 
      state: { 
        selectedService: project.serviceType,
        projectReference: project.title 
      } 
    });
  }, [navigate]);

  // Get current filtered count for search results
  const getCurrentFilteredCount = () => {
    let filtered = [...mockProjects];

    if (activeFilters.length > 0) {
      filtered = filtered.filter(project => {
        return activeFilters.every(filter => {
          switch (filter.category) {
            case 'service':
              return project.serviceType === filter.value;
            case 'industry':
              return project.industry === filter.value;
            case 'material':
              return project.material === filter.value;
            case 'scale':
              return project.scale === filter.value;
            default:
              return true;
          }
        });
      });
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.client.toLowerCase().includes(searchLower)
      );
    }

    return filtered.length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="pt-16 bg-gradient-to-br from-primary-50 to-surface-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Image" size={24} color="white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                Project Gallery
              </h1>
            </div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Explore our portfolio of completed printing projects. From large format banners to custom merchandise, 
              see the quality and creativity we bring to every project.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        totalResults={getCurrentFilteredCount()}
      />

      {/* Filter Chips */}
      <FilterChips
        filters={activeFilters}
        activeFilters={activeFilters}
        onFilterToggle={handleFilterToggle}
        onClearAll={handleClearAllFilters}
        isMobile={isMobile}
      />

      {/* Project Grid */}
      <ProjectGrid
        projects={filteredProjects}
        loading={loading}
        onProjectClick={handleProjectClick}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
        isMobile={isMobile}
      />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleModalClose}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
        currentIndex={selectedProjectIndex}
        totalProjects={filteredProjects.length}
        onRequestQuote={handleRequestQuote}
      />
    </div>
  );
};

export default GalleryPage;