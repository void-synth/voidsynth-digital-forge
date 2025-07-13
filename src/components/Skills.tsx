
import { Code, Palette, Database, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './SkillsAnimations.css'; // Import custom CSS for extra animations
import { useRef } from 'react';

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SCSS', level: 92 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React.js', level: 88 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'C Programming', level: 78 },
        { name: 'Shell Scripting', level: 85 },
        { name: 'REST APIs', level: 88 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20',
      skills: [
        { name: 'Figma (Certified)', level: 95 },
        { name: 'Adobe XD', level: 85 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Prototyping', level: 88 },
        { name: 'Design Systems', level: 87 },
        { name: 'User Research', level: 82 },
        { name: 'Wireframing', level: 90 }
      ]
    },
    {
      title: 'Tools & Methods',
      icon: Wrench,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/20',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 88 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Responsive Design', level: 93 },
        { name: 'Testing & QA', level: 80 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  ];

  const certifications = [
    'Figma Professional Certification',
    'ALX Software Engineering Graduate',
    'Frontend Development Specialist',
    'UI/UX Design Excellence'
  ];

  // 3D tilt effect handler
  function handleTilt(e, cardRef) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    const y = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const rotateX = (deltaY / rect.height) * 12;
    const rotateY = -(deltaX / rect.width) * 12;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
  }
  function resetTilt(cardRef) {
    const card = cardRef.current;
    if (card) card.style.transform = '';
  }

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-primary/10 via-accent/10 to-background pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'reveal-on-scroll revealed fade-in-up' : 'reveal-on-scroll'}`}> {/* fade-in-up for heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="professional-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
          <div className="section-divider" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const cardRef = useRef(null);
            return (
              <Card 
                key={category.title} 
                ref={cardRef}
                className={`${category.bgColor} ${category.borderColor} border-2 hover-lift hover-glow transition-all duration-800 skill-card tilt-card professional-card professional-shadow ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
                onMouseMove={e => handleTilt(e, cardRef)}
                onMouseLeave={() => resetTilt(cardRef)}
                onTouchMove={e => handleTilt(e, cardRef)}
                onTouchEnd={() => resetTilt(cardRef)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="icon-anim-wrapper">
                      <IconComponent className={`h-6 w-6 ${category.color} float-animation icon-anim`} />
                    </span>
                    <span className="hover:text-shimmer transition-all duration-300">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="hover-glow">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium hover:text-shimmer transition-all duration-300">{skill.name}</span>
                          <span className={`text-sm font-bold ${category.color} text-shimmer`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out skill-bar ${isVisible ? 'bar-fill-bounce' : ''} ${category.title === 'Frontend Development' ? 'bg-primary' : category.title === 'Backend Development' ? 'bg-accent' : category.title === 'Design & UX' ? 'bg-purple-400' : 'bg-orange-400'}`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 0.1 + 0.5}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className={`text-center transition-all duration-800 delay-800 ${isVisible ? 'reveal-on-scroll revealed fade-in-up' : 'reveal-on-scroll'}`}> {/* fade-in-up for certs */}
          <h3 className="text-2xl font-bold mb-6 text-accent text-shimmer">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={cert} 
                variant="outline" 
                className={`text-sm py-2 px-4 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover-lift hover-glow badge-anim ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1 + 1}s` }}
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
