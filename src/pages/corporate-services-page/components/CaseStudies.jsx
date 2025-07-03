import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


  const handleWhatsAppClick = () => {
    const phoneNumber = '254791159618';
    const message = 'Hello! I would like to inquire about your corporate and political projects.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };


const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: 'Major Political Campaign 2022',
      category: 'Political Campaign',
      client: 'Confidential Political Party',
      duration: '7 months',
      budget: 'KES 15M+',
      image: 'https://www.freepik.com/premium-vector/kenya-flag-male-hand-voting-with-kenya-flag-concept-idea-background_17588288.htm#fromView=search&page=1&position=27&uuid=8a538398-99b0-4831-bb7d-e057a98f32ad&query=kenyan+election+campaign',
      challenge: `A major political party needed comprehensive campaign materials for the 2022 general elections, including posters, banners, t-shirts, and promotional items across all 47 counties in Kenya.`,
      solution: `We deployed a coordinated production strategy using our full equipment fleet:\n• 500,000 A1 campaign posters printed on weather-resistant material\n• 50,000 large format banners for rallies and events\n• 200,000 branded t-shirts with party colors and slogans\n• 1 million flyers and leaflets for door-to-door campaigns\n• Custom merchandise including caps, bags, and pens`,
      results: [
        'Delivered 100% of materials on schedule',
        'Zero quality complaints across all items',
        'Established distribution network in 47 counties',
        'Achieved 30% cost savings through bulk production',
        'Maintained brand consistency across all materials'
      ],
      testimonial: `Luna Graphics delivered exceptional quality and service during our campaign. Their ability to handle massive volumes while maintaining consistency was crucial to our success.`,
      author: 'Campaign Manager',
      metrics: [
        { label: 'Items Produced', value: '750K+' },
        { label: 'Counties Covered', value: '47' },
        { label: 'Delivery Accuracy', value: '100%' },
        { label: 'Cost Savings', value: '30%' }
      ]
    },
    {
      title: 'Corporate Rebranding Project',
      category: 'Corporate Branding',
      client: 'Leading Kenyan Bank',
      duration: '5 months',
      budget: 'KES 8M+',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: `A major Kenyan bank underwent complete rebranding and needed to update all physical materials across 150+ branches nationwide while maintaining operations.`,
      solution: `We executed a phased rollout strategy to minimize business disruption:\n• New signage for 150+ branches with LED illumination\n• 500,000 business cards for all staff members\n• Updated marketing materials including brochures and flyers\n• Branded merchandise for customer gifts and staff uniforms\n• Vehicle wrapping for the entire fleet of 200+ vehicles`,
      results: [
        'Completed rollout in 4 months as scheduled',
        'Zero operational disruption during installation',
        'Consistent brand implementation across all touchpoints',
        'Improved brand recognition by 45%',
        'Enhanced customer experience scores'
      ],
      testimonial: `The professionalism and attention to detail shown by Luna Graphics during our rebranding was outstanding. They understood the importance of maintaining our operations while executing the transformation.`,
      author: 'Head of Marketing',
      metrics: [
        { label: 'Branches Updated', value: '150+' },
        { label: 'Business Cards', value: '500K' },
        { label: 'Vehicles Wrapped', value: '200+' },
        { label: 'Brand Recognition', value: '+45%' }
      ]
    },
    {
      title: 'International Trade Exhibition',
      category: 'Event & Exhibition',
      client: 'Kenya Association of Manufacturers',
      duration: '3 months',
      budget: 'KES 5M+',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: `Kenya Association of Manufacturers needed comprehensive exhibition materials for a major international trade show featuring 200+ local companies showcasing to global buyers.`,
      solution: `We provided end-to-end exhibition solutions:\n• Custom exhibition stands for 200+ companies\n• Large format backdrops and banners\n• Product catalogs and marketing brochures\n• Branded merchandise and giveaways\n• Digital displays and interactive materials\n• On-site support and last-minute adjustments`,
      results: [
        'Successfully showcased 200+ Kenyan companies',
        'Generated $50M+ in export inquiries',
        'Received international recognition for quality',
        'Established long-term partnerships with exhibitors',
        'Set new standard for trade show presentations'
      ],
      testimonial: `Luna Graphics helped us present Kenya's manufacturing sector in the best possible light. The quality of materials and attention to detail impressed international buyers and elevated our country's image.`,
      author: 'Exhibition Director',
      metrics: [
        { label: 'Companies Featured', value: '200+' },
        { label: 'Export Inquiries', value: '$50M+' },
        { label: 'Materials Produced', value: '10K+' },
        { label: 'Countries Reached', value: '45' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real results from major corporate and political projects across Kenya
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCase === index
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-primary-50 hover:text-primary'
              }`}
            >
              {study.category}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Case Study Header */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src={caseStudies[activeCase].image}
              alt={caseStudies[activeCase].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {caseStudies[activeCase].category}
              </div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-2">
                {caseStudies[activeCase].title}
              </h3>
              <div className="flex flex-wrap gap-6 text-sm opacity-90">
                <div className="flex items-center space-x-2">
                  <Icon name="Building2" size={16} />
                  <span>{caseStudies[activeCase].client}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>{caseStudies[activeCase].duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="DollarSign" size={16} />
                  <span>{caseStudies[activeCase].budget}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Challenge */}
                <div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
                    <Icon name="Target" size={24} className="mr-3 text-error" />
                    The Challenge
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {caseStudies[activeCase].challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
                    <Icon name="Lightbulb" size={24} className="mr-3 text-warning" />
                    Our Solution
                  </h4>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {caseStudies[activeCase].solution}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
                    <Icon name="TrendingUp" size={24} className="mr-3 text-success" />
                    Results Achieved
                  </h4>
                  <div className="grid gap-3">
                    {caseStudies[activeCase].results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Quote" size={32} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-text-primary italic text-lg leading-relaxed mb-4">
                        "{caseStudies[activeCase].testimonial}"
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} color="white" />
                        </div>
                        <div>
                          <div className="font-semibold text-text-primary">
                            {caseStudies[activeCase].author}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {caseStudies[activeCase].client}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Sidebar */}
              <div className="space-y-6">
                <h4 className="text-xl font-heading font-bold text-primary">Key Metrics</h4>
                <div className="space-y-4">
                  {caseStudies[activeCase].metrics.map((metric, index) => (
                    <div key={index} className="bg-surface-50 rounded-lg p-4">
                      <div className="text-2xl font-heading font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary to-primary-700 rounded-xl p-6 text-white text-center">
                  <h5 className="font-heading font-bold mb-2">Ready for Similar Results?</h5>
                  <p className="text-sm text-primary-100 mb-4">
                    Let's discuss your project requirements
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={handleWhatsAppClick}
                    className=" text-primary "
                  >
                    Start Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;