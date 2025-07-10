
import { Trophy, Award, Medal, Star, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
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
      prize: '$10,000 + Mentorship Program',
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
      prize: '$8,000 + Incubation Opportunity',
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
      prize: '$5,000 + Tech Partnership',
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
      prize: 'OpenAI Credits + Recognition',
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
      prize: 'Certificate of Excellence',
      tech: ['Full-Stack Development', 'System Design', 'DevOps']
    }
  ];

  const stats = [
    { label: 'Hackathons Won', value: '3', icon: Trophy },
    { label: 'Total Prize Money', value: '$23K+', icon: Award },
    { label: 'Competition Entries', value: '15+', icon: Medal },
    { label: 'Recognition Awards', value: '8', icon: Star }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-primary glow-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating excellence in innovation, competition, and technical mastery
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={stat.label} 
                className="bg-card/30 border-muted/20 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
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
                className={`${achievement.bgColor} ${achievement.borderColor} border-2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${achievement.bgColor}`}>
                        <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{achievement.title}</CardTitle>
                        <div className="flex items-center gap-3">
                          <Badge className={`${achievement.color} bg-transparent border-current`}>
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

                <CardContent className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {achievement.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-1">Prize & Recognition</h4>
                      <p className="text-sm text-muted-foreground">{achievement.prize}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Create Something Amazing?</h3>
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
