
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/void-synth',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/voidsynth',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:umarboluwatife01@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/30 border-t border-border/50 dark:bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="mb-4">
              <h3 className="text-2xl font-bold font-mono">
                <span className="professional-text">Void</span>
                <span className="accent-text">Synth</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Crafting digital experiences through innovative code and stunning design. 
              Based in Lagos, Nigeria, serving clients worldwide.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 sm:mb-0">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>AI Solutions</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-center sm:text-left">
            <div className="text-muted-foreground text-sm mb-2 sm:mb-0 flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span>© {currentYear} VoidSynth. All rights reserved.</span>
              <span>Crafted with passion in Lagos, Nigeria</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Powered by React & Tailwind CSS</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
