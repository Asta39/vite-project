import React from 'react';
import Header from '../../components/ui/Header';
import TeamHero from './components/TeamHero';
import TeamStats from './components/TeamStats';
import TeamSection from './components/TeamSection';

const TeamPage = () => {
  // Leadership Team Data
  const leadershipTeam = [
    {
      id: 1,
      name: "David Kamau",
      title: "Founder & CEO",
      specialization: "Business Strategy & Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: 12,
      whatsapp: "+254700000001",
      email: "david@halocreatives.co.ke",
      briefDescription: "Visionary leader with over a decade of experience in the printing industry, driving innovation and excellence.",
      detailedBackground: `David founded Halo Creatives with a vision to revolutionize the printing industry in Kenya. With 12 years of experience in business operations and strategic planning, he has successfully grown the company from a small print shop to a leading printing solutions provider in Nairobi.\n\nHis expertise spans across business development, client relationship management, and operational excellence. David holds an MBA in Business Administration and has been instrumental in establishing partnerships with major corporations and government entities.`,
      skills: ["Business Strategy", "Operations Management", "Client Relations", "Team Leadership", "Market Analysis"],
      certifications: [
        "MBA in Business Administration - University of Nairobi",
        "Certified Print Management Professional",
        "ISO 9001:2015 Quality Management Systems"
      ],
      achievements: [
        "Grew company revenue by 300% in 5 years",
        "Established partnerships with 50+ corporate clients",
        "Led digital transformation initiatives"
      ],
      projectsCompleted: 500,
      clientSatisfaction: 98
    },
    {
      id: 2,
      name: "Grace Wanjiku",
      title: "Creative Director",
      specialization: "Design & Brand Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      experience: 8,
      whatsapp: "+254700000002",
      email: "grace@halocreatives.co.ke",
      briefDescription: "Award-winning designer specializing in brand identity and creative solutions for diverse industries.",
      detailedBackground: `Grace brings exceptional creative vision to Halo Creatives, leading our design team with innovative approaches to brand development and visual communication. Her portfolio includes work for major Kenyan brands, political campaigns, and international clients.\n\nWith a background in graphic design and brand strategy, Grace has been recognized for her outstanding contributions to the creative industry. She specializes in creating compelling visual narratives that resonate with target audiences and drive business results.`,
      skills: ["Brand Design", "Creative Strategy", "Team Management", "Client Consultation", "Digital Design"],
      certifications: [
        "Bachelor of Arts in Graphic Design - Kenyatta University",
        "Adobe Certified Expert (ACE)",
        "Brand Strategy Certification - Design Management Institute"
      ],
      achievements: [
        "Winner of Kenya Design Awards 2022",
        "Led rebranding projects for 20+ major clients",
        "Mentored 15+ junior designers"
      ],
      projectsCompleted: 350,
      clientSatisfaction: 97
    }
  ];

  // Technical Specialists Data
  const technicalTeam = [
    {
      id: 3,
      name: "James Ochieng",
      title: "Production Manager",
      specialization: "Large Format & UV Printing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      experience: 10,
      whatsapp: "+254700000003",
      email: "james@halocreatives.co.ke",
      briefDescription: "Expert in large format printing operations with extensive experience in UV printing technology.",
      detailedBackground: `James oversees all production operations at Halo Creatives, ensuring quality control and efficient workflow management. His expertise in large format and UV printing has been crucial in delivering high-quality results for our clients.\n\nWith 10 years of hands-on experience with industrial printing equipment, James has mastered the technical aspects of various printing processes and maintains our high standards of quality and precision.`,
      skills: ["Large Format Printing", "UV Printing", "Quality Control", "Equipment Maintenance", "Production Planning"],
      certifications: [
        "Certified Print Production Professional",
        "UV Printing Technology Specialist",
        "Equipment Safety and Maintenance Certification"
      ],
      achievements: [
        "Reduced production time by 25%",
        "Implemented quality control systems",
        "Zero major equipment failures in 2 years"
      ],
      projectsCompleted: 800,
      clientSatisfaction: 99
    },
    {
      id: 4,
      name: "Mary Njeri",
      title: "CNC & Laser Cutting Specialist",
      specialization: "Precision Cutting & Fabrication",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      experience: 7,
      whatsapp: "+254700000004",
      email: "mary@halocreatives.co.ke",
      briefDescription: "Precision cutting expert specializing in CNC machining and laser cutting for custom fabrication projects.",
      detailedBackground: `Mary leads our precision cutting department, handling complex CNC and laser cutting projects with exceptional accuracy. Her technical expertise ensures that even the most intricate designs are executed flawlessly.\n\nShe has worked on diverse projects ranging from architectural signage to custom promotional items, consistently delivering results that exceed client expectations.`,
      skills: ["CNC Operation", "Laser Cutting", "CAD/CAM Programming", "Material Selection", "Precision Measurement"],
      certifications: [
        "CNC Machining Certification",
        "Laser Safety Officer Certification",
        "CAD/CAM Programming Certificate"
      ],
      achievements: [
        "Achieved 99.8% precision accuracy rate",
        "Completed 200+ custom fabrication projects",
        "Reduced material waste by 30%"
      ],
      projectsCompleted: 450,
      clientSatisfaction: 98
    },
    {
      id: 5,
      name: "Peter Mwangi",
      title: "Digital Printing Technician",
      specialization: "Digital & Offset Printing",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      experience: 6,
      whatsapp: "+254700000005",
      email: "peter@halocreatives.co.ke",
      briefDescription: "Digital printing specialist with expertise in high-volume commercial printing and color management.",
      detailedBackground: `Peter manages our digital and offset printing operations, ensuring consistent quality across all print runs. His attention to detail and color management expertise has made him invaluable for projects requiring precise color matching.\n\nHe specializes in high-volume commercial printing and has developed efficient workflows that maintain quality while meeting tight deadlines.`,
      skills: ["Digital Printing", "Offset Printing", "Color Management", "Print Finishing", "Quality Assurance"],
      certifications: [
        "Digital Printing Technology Certificate",
        "Color Management Specialist",
        "Print Finishing Techniques Certification"
      ],
      achievements: [
        "Managed 1000+ print jobs annually",
        "Achieved 99% color accuracy rate",
        "Implemented automated quality checks"
      ],
      projectsCompleted: 1200,
      clientSatisfaction: 97
    },
    {
      id: 6,
      name: "Sarah Akinyi",
      title: "Custom Merchandise Specialist",
      specialization: "T-shirt Printing & Promotional Items",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      experience: 5,
      whatsapp: "+254700000006",
      email: "sarah@halocreatives.co.ke",
      briefDescription: "Creative specialist in custom merchandise production, from t-shirt printing to promotional item customization.",
      detailedBackground: `Sarah heads our custom merchandise division, bringing creativity and technical expertise to every project. She has mastered various printing techniques including screen printing, heat transfer, and embroidery.\n\nHer work spans from corporate branded merchandise to custom event apparel, always ensuring that the final products meet the highest quality standards and client expectations.`,
      skills: ["Screen Printing", "Heat Transfer", "Embroidery", "Product Design", "Material Selection"],
      certifications: [
        "Screen Printing Professional Certificate",
        "Textile Printing Specialist",
        "Embroidery Machine Operation Certification"
      ],
      achievements: [
        "Produced 10,000+ custom items annually",
        "Developed new printing techniques",
        "Client retention rate of 95%"
      ],
      projectsCompleted: 600,
      clientSatisfaction: 96
    }
  ];

  // Design Team Data
  const designTeam = [
    {
      id: 7,
      name: "Michael Kiprotich",
      title: "Senior Graphic Designer",
      specialization: "Brand Identity & Marketing Materials",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      experience: 6,
      whatsapp: "+254700000007",
      email: "michael@halocreatives.co.ke",
      briefDescription: "Creative designer specializing in brand identity development and marketing material design.",
      detailedBackground: `Michael is a talented graphic designer who brings fresh perspectives to brand identity projects. His creative approach and attention to detail have helped numerous clients establish strong visual identities.\n\nHe works closely with clients to understand their vision and translate it into compelling visual designs that effectively communicate their brand message.`,
      skills: ["Brand Identity", "Logo Design", "Marketing Materials", "Digital Design", "Print Design"],
      certifications: [
        "Bachelor of Design - University of Nairobi",
        "Adobe Creative Suite Certification",
        "Brand Design Professional Certificate"
      ],
      achievements: [
        "Designed 50+ brand identities",
        "Won 3 local design competitions",
        "Mentored 5 junior designers"
      ],
      projectsCompleted: 300,
      clientSatisfaction: 98
    },
    {
      id: 8,
      name: "Linda Wambui",
      title: "Junior Designer",
      specialization: "Digital Design & Social Media Graphics",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      experience: 3,
      whatsapp: "+254700000008",
      email: "linda@halocreatives.co.ke",
      briefDescription: "Emerging designer with a passion for digital design and social media graphics.",
      detailedBackground: `Linda is a promising young designer who brings fresh energy and modern design sensibilities to our team. She specializes in digital design and has a keen understanding of current design trends.\n\nHer work focuses on creating engaging social media graphics and digital marketing materials that resonate with younger audiences.`,
      skills: ["Digital Design", "Social Media Graphics", "Web Design", "Animation", "UI/UX Design"],
      certifications: [
        "Diploma in Graphic Design",
        "Digital Marketing Design Certificate",
        "Social Media Graphics Specialist"
      ],
      achievements: [
        "Created 500+ social media graphics",
        "Improved client engagement by 40%",
        "Completed advanced design training"
      ],
      projectsCompleted: 200,
      clientSatisfaction: 95
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <TeamHero />

      {/* Team Stats */}
      <TeamStats />

      {/* Leadership Team */}
      <TeamSection
        title="Leadership Team"
        description="Experienced leaders driving innovation and excellence in printing solutions"
        members={leadershipTeam}
        isLeadership={true}
      />

      {/* Technical Specialists */}
      <div className="bg-surface-50">
        <TeamSection
          title="Technical Specialists"
          description="Expert technicians ensuring quality and precision in every project"
          members={technicalTeam}
        />
      </div>

      {/* Design Team */}
      <TeamSection
        title="Creative Design Team"
        description="Talented designers bringing your vision to life with creativity and expertise"
        members={designTeam}
      />

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-primary to-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your printing needs and discover how our skilled professionals can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/contact-page'}
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-surface-100 transition-colors duration-200"
            >
              Get Started Today
            </button>
            <button
              onClick={() => window.location.href = '/gallery-page'}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;