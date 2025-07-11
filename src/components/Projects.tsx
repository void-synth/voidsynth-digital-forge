
import { ExternalLink, Github, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const featuredProjects = [
    {
      title: 'FraudMorph AI',
      role: 'Lead Developer & AI Architect',
      description: 'Advanced machine learning platform for financial fraud detection using deep learning algorithms. Achieved 94% accuracy in fraud pattern recognition.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['Python', 'TensorFlow', 'Django', 'React', 'PostgreSQL'],
      features: [
        'Real-time fraud detection',
        'Machine learning pipeline',
        'Administrative dashboard',
        'API integration'
      ],
      github: '/source-private.html', // private source
      demo: 'https://fraudmorph-sentinel-ai.vercel.app/',
      status: 'award',
      award: 'Best AI Innovation - TechCrunch Disrupt'
    },
    {
      title: 'ChainProof',
      role: 'Blockchain Developer & Security Engineer',
      description: 'Blockchain-based document verification system with cryptographic proof of authenticity. Ensures tamper-proof document validation and secure certificate management.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
      tech: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
      features: [
        'Document verification system',
        'Cryptographic proof validation',
        'Blockchain certificate storage',
        'Tamper-proof authentication'
      ],
      github: 'https://github.com/voidsynth/chainproof',
      demo: 'https://chain-proof-seven.vercel.app/', // updated link
      status: 'award',
      award: 'Winner - ChainProof Hackathon'
    },
    {
      title: 'MURIM Platform',
      role: 'Fullstack Developer & UX Designer',
      description: 'Comprehensive martial arts learning management system with video streaming, progress tracking, and community features.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
      features: [
        'Video streaming platform',
        'Progress tracking system',
        'Community forums',
        'Mobile responsive design'
      ],
      github: '/source-private.html', // private source
      demo: '/murim-private.html', // updated to local info page
      status: 'featured'
    },
    {
      title: 'ShadowCode PenTesting Tool',
      role: 'Security Engineer & Developer',
      description: 'Comprehensive penetration testing toolkit with automated vulnerability scanning and detailed security reports.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop',
      tech: ['Python', 'Shell', 'Nmap', 'Metasploit', 'React'],
      features: [
        'Automated vulnerability scanning',
        'Network reconnaissance',
        'Report generation',
        'Security assessment tools'
      ],
      github: '/source-private.html', // private source
      demo: 'https://shadowcode-seven.vercel.app/', // updated live demo link
      status: 'award',
      award: 'Winner - ShadowCode Hackathon 2023'
    },
    {
      title: 'Non-Loss Forex AI',
      role: 'Quantitative Developer',
      description: 'AI-powered forex trading system with risk management algorithms and predictive market analysis.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Django', 'Chart.js'],
      features: [
        'Market prediction algorithms',
        'Risk management system',
        'Real-time trading signals',
        'Performance analytics'
      ],
      github: '/source-private.html', // private source
      demo: '/forex-private.html', // private live demo
      status: 'featured'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary glow-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions that blend cutting-edge technology with user-centered design
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6 glow-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group bg-card/50 border-muted/20 hover:border-primary/30 transition-all duration-500 overflow-hidden hover-lift hover-glow ${
                isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
              }`}
              style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Status Badge */}
                {project.status === 'award' && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground hover-glow">
                      <Award className="h-3 w-3 mr-1 float-animation" />
                      Award Winner
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors text-shimmer">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-accent font-medium mb-2 hover:text-shimmer transition-all duration-300">{project.role}</p>
                  </div>
                </div>
                
                {project.award && (
                  <div className="text-xs text-muted-foreground italic hover-glow">
                    🏆 {project.award}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed hover-glow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-shimmer">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs hover-lift hover-glow"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-shimmer">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center hover-glow">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2 float-animation" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover-lift group"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                      <span className="group-hover:text-shimmer transition-all duration-300">Live Demo</span>
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 border border-muted/30 hover:border-primary/30 hover-lift group ${project.github === '/source-private.html' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    asChild
                    title={project.github === '/source-private.html' ? 'Private Source Code – Not Publicly Available' : 'View Source Code on GitHub'}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      {project.github === '/source-private.html' ? (
                        <span className="flex items-center"><span style={{fontSize:'1.1em',marginRight:'0.3em'}}>🔒</span>Private Source</span>
                      ) : (
                        <span className="flex items-center"><Github className="h-4 w-4 mr-2" />Source Code</span>
                      )}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-800 delay-1000 ${isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'}`}>
          <p className="text-muted-foreground mb-6 hover-glow">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover-lift group"
            asChild
          >
            <a href="https://github.com/void-synth" target="_blank" rel="noopener noreferrer">
              <span className="group-hover:text-shimmer transition-all duration-300">View All Projects</span>
              <ExternalLink className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
