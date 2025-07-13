
import { Trophy, Award, Medal, Star, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Achievements = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const achievements = [
    {
      title: 'ShadowCode Hackathon',
      position: 'Winner',
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/20',
      date: '2023',
      description: 'Developed advanced penetration testing toolkit with automated vulnerability scanning',
      tech: ['Python', 'Cybersecurity', 'Shell Scripting']
    },
    {
      title: 'ChainProof Hackathon',
      position: 'Winner',
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/20',
      date: '2023',
      description: 'Built blockchain-based document verification system with smart contracts',
      tech: ['Solidity', 'Web3', 'React']
    },
    {
      title: 'CodeSprint Lagos',
      position: 'Runner-up',
      icon: Medal,
      color: 'text-gray-400',
      bgColor: 'bg-gray-400/10',
      borderColor: 'border-gray-400/20',
      date: '2023',
      description: 'Created AI-powered fintech solution for microfinance institutions',
      tech: ['Django', 'Machine Learning', 'FinTech']
    },
    {
      title: 'OpenAI Codex Challenge',
      position: 'Finalist',
      icon: Star,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20',
      date: '2023',
      description: 'Developed AI-assisted code generation tool for rapid prototyping',
      tech: ['OpenAI API', 'TypeScript', 'VS Code Extension']
    },
    {
      title: 'ALX Innovation Sprint',
      position: 'Honoree',
      icon: Award,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
      date: '2024',
      description: 'Outstanding performance in software engineering capstone project',
      tech: ['Full-Stack Development', 'System Design', 'DevOps']
    }
  ];

  const stats = [
    { label: 'Hackathons Won', value: '3', icon: Trophy },
    { label: 'Competition Entries', value: '15+', icon: Medal },
    { label: 'Recognition Awards', value: '8', icon: Star }
  ];

  return (
    <section id="achievements" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="professional-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating excellence in innovation, competition, and technical mastery
          </p>
          <div className="section-divider" />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={stat.label} 
                className={`bg-card/30 border-muted/20 text-center hover-lift hover-glow transition-all duration-800 professional-card professional-shadow ${
                  isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <CardContent className="p-6">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-2 float-animation" />
                  <div className="text-2xl font-bold text-primary mb-1 text-shimmer">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={achievement.title} 
                className={`${achievement.bgColor} ${achievement.borderColor} border-2 hover-lift hover-glow transition-all duration-800 professional-card professional-shadow ${
                  isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
                }`}
                style={{ animationDelay: `${index * 0.2 + 0.6}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${achievement.bgColor}`}>
                        <IconComponent className={`h-6 w-6 ${achievement.color} float-animation`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1 text-shimmer">{achievement.title}</CardTitle>
                        <div className="flex items-center gap-3">
                          <Badge className={`${achievement.color} bg-transparent border-current hover-glow`}>
                            {achievement.position}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {achievement.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed hover-glow">
                      {achievement.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-shimmer">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {achievement.tech.map((tech, techIndex) => (
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
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg hover-lift hover-glow transition-all duration-800 delay-1200 professional-card professional-shadow ${
          isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'
        }`}>
          <h3 className="text-2xl font-bold mb-4 professional-text">Ready to Create Something Amazing?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            With a proven track record of winning competitions and delivering innovative solutions, 
            I'm ready to bring that same excellence to your next project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
