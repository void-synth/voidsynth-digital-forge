
import { Code, Palette, Database, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
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

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary glow-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className={`${category.bgColor} ${category.borderColor} border-2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className={`text-sm font-bold ${category.color}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              category.title === 'Frontend Development' ? 'bg-primary' :
                              category.title === 'Backend Development' ? 'bg-accent' :
                              category.title === 'Design & UX' ? 'bg-purple-400' :
                              'bg-orange-400'
                            }`}
                            style={{ width: `${skill.level}%` }}
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
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-accent">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={cert} 
                variant="outline" 
                className="text-sm py-2 px-4 border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
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
