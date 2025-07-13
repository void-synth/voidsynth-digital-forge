import { useState } from 'react';
import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Cpu,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Sparkles
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState<string>('development');

  const categories = [
    {
      id: 'development',
      title: 'Web Development',
      icon: Code2,
      description: 'End-to-end web application development with modern technologies'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Cross-platform mobile app development for iOS and Android'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Database,
      description: 'Scalable backend services and API development'
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      icon: Cloud,
      description: 'Cloud architecture and DevOps automation'
    },
    {
      id: 'security',
      title: 'Security Solutions',
      icon: Shield,
      description: 'Application security and penetration testing'
    },
    {
      id: 'ai',
      title: 'AI Integration',
      icon: Cpu,
      description: 'AI/ML solutions and integrations'
    }
  ];

  const services = {
    development: {
      title: 'Web Development Services',
      description: 'Modern, responsive, and performant web applications built with the latest technologies.',
      features: [
        {
          title: 'Frontend Development',
          description: 'Pixel-perfect, responsive interfaces with modern frameworks',
          technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
          deliverables: [
            'Responsive UI/UX implementation',
            'Performance optimization',
            'Component library setup',
            'State management integration'
          ]
        },
        {
          title: 'Full Stack Development',
          description: 'End-to-end application development with seamless integration',
          technologies: ['Node.js', 'PostgreSQL', 'GraphQL', 'Redis'],
          deliverables: [
            'API development and integration',
            'Database design and optimization',
            'Authentication and authorization',
            'Real-time features implementation'
          ]
        },
        {
          title: 'E-commerce Solutions',
          description: 'Custom e-commerce platforms with advanced features',
          technologies: ['Next.js', 'Stripe', 'MongoDB', 'ElasticSearch'],
          deliverables: [
            'Product catalog management',
            'Payment gateway integration',
            'Inventory management system',
            'Analytics and reporting'
          ]
        }
      ]
    },
    mobile: {
      title: 'Mobile Development Services',
      description: 'Cross-platform mobile applications with native performance.',
      features: [
        {
          title: 'React Native Development',
          description: 'Cross-platform mobile apps with native feel',
          technologies: ['React Native', 'TypeScript', 'Redux', 'Native Modules'],
          deliverables: [
            'Cross-platform compatibility',
            'Native feature integration',
            'Performance optimization',
            'App store deployment'
          ]
        },
        {
          title: 'Progressive Web Apps',
          description: 'Web apps with mobile-first experience',
          technologies: ['PWA', 'Service Workers', 'WebSocket', 'IndexedDB'],
          deliverables: [
            'Offline functionality',
            'Push notifications',
            'App-like experience',
            'Cross-browser support'
          ]
        }
      ]
    }
    // Add more service categories as needed
  };

  const selectedService = services[selectedCategory as keyof typeof services];

  return (
    <section id="services" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="professional-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
          <div className="section-divider" />
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-primary/5'
                } professional-card hover-lift`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-medium text-sm mb-1">{category.title}</h3>
                  <p className="text-xs opacity-80">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedService && (
          <div className={`space-y-12 ${
            isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
          }`}>
            {/* Service Features */}
            <div className="grid md:grid-cols-3 gap-6">
              {selectedService.features.map((feature, index) => (
                <Card key={feature.title} className="professional-card hover-lift">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>

                    <div className="space-y-4">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Code2 className="w-4 h-4" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {feature.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {feature.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ArrowRight className="w-4 h-4 mt-1 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: 'Fast Delivery',
                  description: 'Quick turnaround time with quality results'
                },
                {
                  icon: Users,
                  title: 'Dedicated Support',
                  description: 'Direct communication and regular updates'
                },
                {
                  icon: Shield,
                  title: 'Quality Assured',
                  description: 'Rigorous testing and best practices'
                },
                {
                  icon: Sparkles,
                  title: 'Modern Stack',
                  description: 'Latest technologies and frameworks'
                }
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="professional-card hover-lift">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services; 