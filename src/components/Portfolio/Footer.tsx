import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 border-t border-glass-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Logo/Name */}
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Prathibha Bollu
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Software Developer building scalable web applications and solving complex problems with clean, efficient code.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              size="icon" 
              variant="ghost" 
              className="glass-card hover-glow rounded-full w-12 h-12 hover:text-primary"
              onClick={() => window.open('https://github.com/prathibha-bollu', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="glass-card hover-glow rounded-full w-12 h-12 hover:text-primary"
              onClick={() => window.open('https://www.linkedin.com/in/prathibha-bollu/', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="glass-card hover-glow rounded-full w-12 h-12 hover:text-primary"
              onClick={() => window.open('mailto:bprathibhaedu@gmail.com')}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-1 mb-4 md:mb-0">
            <span>© {currentYear} Prathibha Bollu. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={scrollToTop}
            className="glass-card hover-glow"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;