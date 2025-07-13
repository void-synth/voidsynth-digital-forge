
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Experience from '@/components/Experience';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        <Services />
        <Testimonials />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
