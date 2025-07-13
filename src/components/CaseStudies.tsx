import { useState } from 'react';
import { 
  Rocket, 
  Target, 
  Wrench, 
  CheckCircle, 
  ArrowRight, 
  Code2, 
  LineChart,
  Users,
  Link as LinkIcon,
  Github
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CaseStudies = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [selectedStudy, setSelectedStudy] = useState<string>('ecommerce');

  const caseStudies = {
    ecommerce: {
      title: 'E-commerce Platform Redesign',
      subtitle: 'Modernizing the online shopping experience',
      thumbnail: '/case-studies/ecommerce-thumb.jpg',
      challenge: 'The client\'s legacy e-commerce platform was struggling with poor performance, low conversion rates, and limited mobile functionality.',
      approach: [
        'Conducted extensive user research and analytics analysis',
        'Implemented a modern microservices architecture',
        'Developed a responsive, mobile-first interface',
        'Integrated advanced search and filtering capabilities'
      ],
      solution: {
        architecture: [
          'Next.js for server-side rendering',
          'Node.js microservices',
          'Redis caching layer',
          'Elasticsearch for product search'
        ],
        features: [
          'Real-time inventory management',
          'Personalized product recommendations',
          'Advanced filtering and search',
          'Mobile-optimized checkout'
        ]
      },
      results: [
        { metric: 'Conversion Rate', improvement: '150%', value: 40 },
        { metric: 'Page Load Time', improvement: '-60%', value: 80 },
        { metric: 'Mobile Traffic', improvement: '+85%', value: 65 },
        { metric: 'Customer Satisfaction', improvement: '+92%', value: 90 }
      ],
      technologies: [
        'Next.js', 'Node.js', 'TypeScript', 'Redis', 'Elasticsearch', 'Docker'
      ],
      links: {
        live: 'https://example.com/ecommerce',
        github: 'https://github.com/yourusername/ecommerce'
      },
      year: '2023'
    },
    analytics: {
      title: 'Real-time Analytics Dashboard',
      subtitle: 'Processing millions of events in real-time',
      thumbnail: '/case-studies/analytics-thumb.jpg',
      challenge: 'Build a real-time analytics platform capable of processing and visualizing millions of events per day with sub-second latency.',
      approach: [
        'Designed event-driven architecture',
        'Implemented stream processing pipeline',
        'Created dynamic visualization system',
        'Optimized for high-throughput data'
      ],
      solution: {
        architecture: [
          'Apache Kafka for event streaming',
          'ClickHouse for analytics storage',
          'React for real-time UI',
          'WebSocket for live updates'
        ],
        features: [
          'Real-time data processing',
          'Custom metric creation',
          'Automated alerting',
          'Data export capabilities'
        ]
      },
      results: [
        { metric: 'Data Processing', improvement: '1M+ events/sec', value: 95 },
        { metric: 'Query Performance', improvement: '-80%', value: 85 },
        { metric: 'System Uptime', improvement: '99.99%', value: 92 },
        { metric: 'User Adoption', improvement: '+200%', value: 88 }
      ],
      technologies: [
        'React', 'Kafka', 'ClickHouse', 'Node.js', 'WebSocket', 'Docker'
      ],
      links: {
        live: 'https://example.com/analytics',
        github: 'https://github.com/yourusername/analytics'
      },
      year: '2022'
    },
    saas: {
      title: 'SaaS Platform Development',
      subtitle: 'Building a scalable project management solution',
      thumbnail: '/case-studies/saas-thumb.jpg',
      challenge: 'Create a comprehensive project management platform with real-time collaboration, automated workflows, and enterprise-grade security.',
      approach: [
        'Implemented domain-driven design',
        'Built scalable microservices',
        'Developed real-time collaboration',
        'Created extensive API documentation'
      ],
      solution: {
        architecture: [
          'React for frontend',
          'GraphQL API gateway',
          'PostgreSQL for data storage',
          'Redis for caching'
        ],
        features: [
          'Real-time collaboration',
          'Custom workflow builder',
          'Role-based access control',
          'Integration marketplace'
        ]
      },
      results: [
        { metric: 'Team Productivity', improvement: '+75%', value: 82 },
        { metric: 'Customer Onboarding', improvement: '-50% time', value: 88 },
        { metric: 'Feature Adoption', improvement: '+120%', value: 78 },
        { metric: 'Enterprise Clients', improvement: '+300%', value: 95 }
      ],
      technologies: [
        'React', 'GraphQL', 'PostgreSQL', 'Redis', 'TypeScript', 'Docker'
      ],
      links: {
        live: 'https://example.com/saas',
        github: 'https://github.com/yourusername/saas'
      },
      year: '2022'
    }
  };

  const study = caseStudies[selectedStudy as keyof typeof caseStudies];

  return (
    <section id="case-studies" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Case <span className="professional-text">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into some of my most impactful projects
          </p>
          <div className="section-divider" />
        </div>

        {/* Project Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(caseStudies).map(([key, study]) => (
            <Button
              key={key}
              variant={selectedStudy === key ? "default" : "outline"}
              onClick={() => setSelectedStudy(key)}
              className="professional-button"
            >
              {study.title}
            </Button>
          ))}
        </div>

        {/* Case Study Content */}
        <div className={`grid md:grid-cols-2 gap-8 ${
          isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
        }`}>
          {/* Left Column - Overview */}
          <div className="space-y-6">
            <Card className="professional-card hover-lift">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-shimmer">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.subtitle}</p>
                
                <div className="flex gap-4 mb-6">
                  <a 
                    href={study.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <LinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a 
                    href={study.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </div>

                <div className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold mb-2">
                      <Target className="h-5 w-5 text-primary" />
                      Challenge
                    </h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold mb-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      Approach
                    </h4>
                    <ul className="space-y-2">
                      {study.approach.map((step, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <ArrowRight className="h-4 w-4 mt-1 text-primary" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="professional-card hover-lift">
              <CardContent className="p-6">
                <h4 className="flex items-center gap-2 font-semibold mb-4">
                  <Code2 className="h-5 w-5 text-primary" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="hover-glow">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Technical Details */}
          <div className="space-y-6">
            {/* Solution Architecture */}
            <Card className="professional-card hover-lift">
              <CardContent className="p-6">
                <h4 className="flex items-center gap-2 font-semibold mb-4">
                  <Wrench className="h-5 w-5 text-primary" />
                  Solution Architecture
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-medium mb-2">Technical Stack</h5>
                    <ul className="space-y-2">
                      {study.solution.architecture.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <ArrowRight className="h-4 w-4 mt-1 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2">Key Features</h5>
                    <ul className="space-y-2">
                      {study.solution.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="professional-card hover-lift">
              <CardContent className="p-6">
                <h4 className="flex items-center gap-2 font-semibold mb-4">
                  <LineChart className="h-5 w-5 text-primary" />
                  Results & Impact
                </h4>
                <div className="space-y-4">
                  {study.results.map((result) => (
                    <div key={result.metric} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{result.metric}</span>
                        <span className="text-primary">{result.improvement}</span>
                      </div>
                      <Progress value={result.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 