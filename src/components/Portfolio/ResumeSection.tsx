import resumeFile from '@/assets/resume.pdf';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const ResumeSection = () => {
  // Correct function to download PDF
  const handleDownloadResume = () => {
       const link = document.createElement('a');
    link.href = resumeFile;  // Vite resolves the actual path
    link.download = 'Prathibha_Bollu_Resume.pdf'; // filename for download
    link.click();
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="fade-in">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Get in touch or download my resume to learn more about my experience.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Resume Download Card */}
          <Card className="glass-card p-8 text-center hover-lift hover-glow">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                <Download className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Download Resume</h3>
              <p className="text-muted-foreground">
                Get a detailed overview of my experience, skills, and achievements in PDF format.
              </p>
            </div>
            
            <Button 
              onClick={handleDownloadResume}
              size="lg" 
              className="w-full bg-gradient-primary border-0 hover:shadow-glow text-lg py-6 mb-6"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </Button>

            {/* Contact Info */}
            <div className="space-y-3 pt-6 border-t border-glass-border">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full glass-card hover:bg-primary/10 hover:text-primary hover:border-primary"
                onClick={() => window.open('mailto:bprathibhaedu@gmail.com')}
              >
                <Mail className="w-5 h-5 mr-2" />
                bprathibhaedu@gmail.com
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1 glass-card hover:bg-primary/10 hover:text-primary hover:border-primary"
                  onClick={() => window.open('https://github.com/prathibha-bollu', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1 glass-card hover:bg-primary/10 hover:text-primary hover:border-primary"
                  onClick={() => window.open('https://www.linkedin.com/in/prathibha-bollu/', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <Card className="glass-card p-6 text-center hover-lift">
            <h4 className="text-lg font-semibold mb-2 text-primary">Open to Opportunities</h4>
            <p className="text-muted-foreground">
              Currently seeking exciting full-stack development roles and consulting projects
            </p>
          </Card>
          
          <Card className="glass-card p-6 text-center hover-lift">
            <h4 className="text-lg font-semibold mb-2 text-accent">Have Questions?</h4>
            <p className="text-muted-foreground">
              Connect with me on LinkedIn for any questions or professional inquiries
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;