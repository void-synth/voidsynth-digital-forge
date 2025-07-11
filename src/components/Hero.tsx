
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const resumeImages = [
    '/resume-page-1.jpg',
    '/resume-page-2.jpg',
    '/resume-page-3.jpg',
  ];

  async function downloadResumeAsZip() {
    const zip = new JSZip();
    const folder = zip.folder('VoidSynth-Resume');
    await Promise.all(
      resumeImages.map(async (url, idx) => {
        const response = await fetch(url);
        const blob = await response.blob();
        folder?.file(`resume-page-${idx + 1}.jpg`, blob);
      })
    );
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'VoidSynth-Resume.zip');
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated Cursor Follower */}
      <div 
        className="fixed w-4 h-4 bg-primary/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="reveal-on-scroll revealed">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4 hover-glow">
              <span className="text-primary glow-text text-shimmer">Void</span>
              <span className="text-accent float-animation">Synth</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full glow-pulse" />
          </div>

          {/* Main Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto slide-up stagger-1">
            I'm <span className="text-primary font-semibold hover:text-shimmer transition-all duration-300">VoidSynth</span> — I craft experiences through code and design.
          </p>

          {/* Dynamic Typewriter */}
          <div className="h-16 flex items-center justify-center mb-8 slide-up stagger-2">
            <span className="text-2xl md:text-3xl font-semibold text-accent hover-glow">
              {displayedText}
              <span className={`ml-1 ${isTyping ? 'typewriter' : ''}`}>|</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 slide-up stagger-3">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="neon-border bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-8 py-3 transition-all duration-300 hover-lift group"
            >
              <span className="group-hover:text-shimmer transition-all duration-300">View Projects</span>
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 transition-all duration-300 hover-lift group"
              onClick={downloadResumeAsZip}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              <span className="group-hover:text-shimmer transition-all duration-300">Download Resume</span>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 slide-up stagger-4">
            <a 
              href="mailto:umarboluwatife01@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10 hover-lift hover-glow"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/void-synth" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10 hover-lift hover-glow"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/voidsynth" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10 hover-lift hover-glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse float-animation" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000 float-animation" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-1 h-1 bg-primary rounded-full animate-pulse delay-500 float-animation" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/50 rounded-full animate-pulse float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse float-animation" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;
