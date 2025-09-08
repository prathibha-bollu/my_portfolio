import heroBg from '@/assets/hero-bg.jpg';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = [
    'Software Developer',
    'UX and Front-End Developer',
    'Full-Stack Developer'
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeEffect = () => {
      const currentTitle = titles[currentIndex];
      
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
      }
      
      let typeSpeed = 100;
      
      if (isDeleting) {
        typeSpeed = 50;
      }
      
      if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % titles.length;
      }
      
      setTimeout(typeEffect, typeSpeed);
    };
    
    typeEffect();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text">
            Prathibha Bollu
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground font-light">
              <span className="terminal-cursor">{displayText}</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            Building scalable interactive web applications with modern JavaScript, React, PHP, and cloud technologies
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <Button 
              size="icon" 
              variant="ghost" 
              className="glass-card hover-glow rounded-full w-14 h-14"
              onClick={() => window.open('https://github.com/prathibha-bollu', '_blank')}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="glass-card hover-glow rounded-full w-14 h-14"
              onClick={() => window.open('https://www.linkedin.com/in/prathibha-bollu/', '_blank')}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="glass-card hover-glow rounded-full w-14 h-14"
              onClick={() => window.open('mailto:bprathibhaedu@gmail.com')}
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;