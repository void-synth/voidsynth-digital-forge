import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechStart Solutions',
      image: '/testimonials/sarah.jpg',
      rating: 5,
      date: 'December 2023',
      project: {
        name: 'E-commerce Platform Redesign',
        duration: '3 months',
        type: 'Full Stack Development'
      },
      content: 'The attention to detail and technical expertise demonstrated throughout the project was exceptional. The new e-commerce platform not only looks modern but has significantly improved our conversion rates.',
      metrics: {
        improvement: '+150% conversion rate',
        performance: '60% faster load times'
      }
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      company: 'DataFlow Analytics',
      image: '/testimonials/michael.jpg',
      rating: 5,
      date: 'October 2023',
      project: {
        name: 'Real-time Analytics Dashboard',
        duration: '4 months',
        type: 'Backend Development'
      },
      content: 'The real-time analytics solution delivered exceeded our expectations. The system handles millions of events seamlessly, and the dashboard provides invaluable insights for our team.',
      metrics: {
        improvement: '1M+ events processed/sec',
        performance: '99.99% uptime'
      }
    },
    {
      id: 3,
      name: 'Emily Thompson',
      role: 'Founder',
      company: 'CollabSpace',
      image: '/testimonials/emily.jpg',
      rating: 5,
      date: 'August 2023',
      project: {
        name: 'Project Management Platform',
        duration: '6 months',
        type: 'Full Stack Development'
      },
      content: 'Working together was an absolute pleasure. The attention to user experience and technical architecture resulted in a platform that our clients love using every day.',
      metrics: {
        improvement: '+75% team productivity',
        performance: '-50% onboarding time'
      }
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="professional-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What clients say about working together
          </p>
          <div className="section-divider" />
        </div>

        {/* Social Proof Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Happy Clients', value: '15+' },
            { label: 'Projects Completed', value: '25+' },
            { label: '5-Star Reviews', value: '100%' },
            { label: 'Years Experience', value: '2+' }
          ].map((stat, index) => (
            <Card 
              key={stat.label}
              className={`text-center professional-card hover-lift transition-all duration-300 ${
                isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className={`professional-card hover-lift transition-all duration-300 ${
                    isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
                  }`}>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        {/* Profile Image */}
                        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          {/* Header */}
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                              <p className="text-muted-foreground text-sm">
                                {testimonial.role} at {testimonial.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 fill-primary text-primary"
                                />
                              ))}
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="flex flex-wrap gap-4 mb-4">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3" />
                              {testimonial.project.type}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {testimonial.project.duration}
                            </Badge>
                          </div>

                          {/* Testimonial Content */}
                          <div className="relative mb-6">
                            <Quote className="w-8 h-8 text-primary/20 absolute -top-4 -left-4" />
                            <p className="text-muted-foreground leading-relaxed">
                              {testimonial.content}
                            </p>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(testimonial.metrics).map(([key, value]) => (
                              <div key={key} className="bg-primary/5 rounded-lg p-3">
                                <div className="text-sm text-muted-foreground capitalize">
                                  {key}
                                </div>
                                <div className="text-primary font-semibold">
                                  {value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-lg hover:bg-primary hover:text-background"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-lg hover:bg-primary hover:text-background"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 