
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const titles = [
    'UI/UX Designer',
    'Fullstack Developer', 
    'Hackathon Champion',
    'Creative Technologist'
  ];

  useEffect(() => {
    const currentString = titles[currentTitle];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < currentString.length) {
        setDisplayedText(currentString.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          setIsTyping(true);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
          setDisplayedText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentTitle]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4">
              <span className="text-primary glow-text">Void</span>
              <span className="text-accent">Synth</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full glow-pulse" />
          </div>

          {/* Main Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            I'm <span className="text-primary font-semibold">VoidSynth</span> — I craft experiences through code and design.
          </p>

          {/* Dynamic Typewriter */}
          <div className="h-16 flex items-center justify-center mb-8">
            <span className="text-2xl md:text-3xl font-semibold text-accent">
              {displayedText}
              <span className={`ml-1 ${isTyping ? 'typewriter' : ''}`}>|</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="neon-border bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-8 py-3 transition-all duration-300"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:contact@voidsynth.dev" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/voidsynth" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/voidsynth" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-5 w-1 h-1 bg-primary rounded-full animate-pulse delay-500" />
    </section>
  );
};

export default Hero;
