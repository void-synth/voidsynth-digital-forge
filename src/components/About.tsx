
import { Award, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-secondary/20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary glow-text">VoidSynth</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full glow-pulse" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className={`space-y-6 transition-all duration-800 delay-200 ${isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'}`}>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed hover-glow">
                Hey there! I'm <span className="text-primary font-semibold hover:text-shimmer transition-all duration-300">Mufutau Umar Olamilekan</span>, 
                but the digital world knows me as <span className="text-accent font-semibold hover:text-shimmer transition-all duration-300">VoidSynth</span>. 
                I'm a Nigerian-based creative technologist who bridges the gap between stunning design and 
                powerful functionality.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed hover-glow">
                My journey began with a curiosity about how things work behind the screen. Today, I craft 
                digital experiences that don't just look beautiful—they solve real problems and create 
                meaningful connections between users and technology.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed hover-glow">
                When I'm not coding or designing, you'll find me exploring the intersection of AI and 
                creative expression, competing in hackathons, or mentoring aspiring developers in the 
                Nigerian tech community.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="gradient-border bg-card/50 p-6 rounded-lg hover-lift">
              <h3 className="text-xl font-semibold text-primary mb-3 text-shimmer">Mission</h3>
              <p className="text-muted-foreground italic">
                "To create digital experiences that blend aesthetic beauty with functional excellence, 
                while contributing to the growth of Africa's technology ecosystem."
              </p>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              <span className="group-hover:text-shimmer transition-all duration-300">Download Full Resume</span>
            </Button>
          </div>

          {/* ALX Badge & Stats */}
          <div className={`space-y-6 transition-all duration-800 delay-400 ${isVisible ? 'reveal-on-scroll revealed' : 'reveal-on-scroll'}`}>
            {/* ALX Graduate Badge */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover-lift hover-glow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Award className="h-12 w-12 text-primary mx-auto mb-2 float-animation" />
                  <h3 className="text-xl font-bold text-primary text-shimmer">ALX Africa Graduate</h3>
                  <p className="text-muted-foreground">Software Engineering Program</p>
                  <p className="text-sm text-accent font-semibold">2023 - 2024</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Intensive 12-month program focusing on full-stack development, 
                  system design, and software engineering best practices.
                </p>
              </CardContent>
            </Card>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 border-accent/20 hover-lift hover-glow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1 text-shimmer">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-primary/20 hover-lift hover-glow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1 text-shimmer">5</div>
                  <div className="text-sm text-muted-foreground">Hackathon Wins</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-accent/20 hover-lift hover-glow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1 text-shimmer">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-primary/20 hover-lift hover-glow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1 text-shimmer">50+</div>
                  <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                </CardContent>
              </Card>
            </div>

            {/* Origin Story */}
            <Card className="bg-card/30 border-muted/20 hover-lift hover-glow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-accent mb-3 flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 float-animation" />
                  Why "VoidSynth"?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The name represents the synthesis of ideas from the digital void—transforming 
                  abstract concepts into tangible, beautiful solutions. It's about creating 
                  something meaningful from nothing, just like how every great project starts 
                  with a blank canvas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
