import { Calendar, Building2, ArrowRight, Globe, Star, Code2, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const Experience = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const experiences = [
    {
      company: 'Freelance Developer',
      companyUrl: 'https://github.com/yourusername',
      companyLogo: '/company-logos/freelance.svg',
      position: 'Full Stack Developer',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Providing end-to-end web development solutions for clients worldwide, specializing in modern web applications and digital experiences.',
      achievements: [
        'Developed and launched 10+ custom web applications for clients across different industries',
        'Implemented responsive designs and optimized performance for 1M+ monthly users',
        'Mentored junior developers and provided technical consultation to clients'
      ],
      technologies: [
        { name: 'React/Next.js', proficiency: 95 },
        { name: 'Node.js', proficiency: 90 },
        { name: 'TypeScript', proficiency: 92 },
        { name: 'AWS', proficiency: 85 }
      ],
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Built a scalable e-commerce solution with 50K+ monthly active users',
          link: 'https://project1.com'
        },
        {
          name: 'SaaS Dashboard',
          description: 'Developed an analytics dashboard processing 1M+ daily data points',
          link: 'https://project2.com'
        }
      ],
      year: '2023'
    },
    {
      company: 'Open Source Contributor',
      companyUrl: 'https://github.com/yourusername',
      companyLogo: '/company-logos/opensource.svg',
      position: 'Core Contributor',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Active contributor to various open-source projects, focusing on developer tools and web frameworks.',
      achievements: [
        'Contributed 100+ pull requests to major open source projects',
        'Created developer tools with 1000+ GitHub stars',
        'Published technical articles reaching 50K+ developers'
      ],
      technologies: [
        { name: 'JavaScript', proficiency: 95 },
        { name: 'Python', proficiency: 88 },
        { name: 'Git', proficiency: 90 },
        { name: 'Docker', proficiency: 85 }
      ],
      projects: [
        {
          name: 'DevTools Extension',
          description: 'Browser extension for developers with 10K+ users',
          link: 'https://github.com/yourusername/devtools'
        },
        {
          name: 'CLI Tool',
          description: 'Command-line productivity tool with 5K+ downloads',
          link: 'https://github.com/yourusername/cli-tool'
        }
      ],
      year: '2022'
    }
  ];

  const years = ['all', ...new Set(experiences.map(exp => exp.year))];
  const filteredExperiences = selectedYear === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.year === selectedYear);

  return (
    <section id="experience" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="professional-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional career and key accomplishments
          </p>
          <div className="section-divider" />
          
          {/* Timeline Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
                className="capitalize"
              >
                {year === 'all' ? 'All Years' : year}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {filteredExperiences.map((experience, index) => (
              <div
                key={experience.company}
                className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } ${isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full timeline-dot" />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <Card className="bg-card/30 border-muted/20 hover-lift hover-glow transition-all duration-300 professional-card professional-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          {/* Company Logo */}
                          <div className="w-12 h-12 rounded-full bg-background/50 p-2 flex items-center justify-center">
                            <img 
                              src={experience.companyLogo} 
                              alt={`${experience.company} logo`}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold text-shimmer mb-1">{experience.position}</h3>
                            <a 
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer" 
                              className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-2"
                            >
                              <Building2 className="h-4 w-4 mr-2" />
                              {experience.company}
                              <Globe className="h-4 w-4 ml-2" />
                            </a>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2" />
                              {experience.period}
                              <ArrowRight className="h-4 w-4 mx-2" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 mb-6">
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          Key Achievements
                        </h4>
                        {experience.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <p className="text-sm text-muted-foreground">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      {/* Projects */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          Notable Projects
                        </h4>
                        {experience.projects.map((project, i) => (
                          <a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                          >
                            <h5 className="text-sm font-medium mb-1">{project.name}</h5>
                            <p className="text-xs text-muted-foreground">{project.description}</p>
                          </a>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Code2 className="h-4 w-4" />
                          Technologies & Proficiency
                        </h4>
                        <div className="space-y-3">
                          {experience.technologies.map((tech) => (
                            <div key={tech.name} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{tech.name}</span>
                                <span className="text-muted-foreground">{tech.proficiency}%</span>
                              </div>
                              <Progress value={tech.proficiency} className="h-1.5" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 