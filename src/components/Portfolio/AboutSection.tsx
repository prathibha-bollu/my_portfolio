import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const techStack = [
  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Typescipt', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Figma', category: 'Frontend' },
   
  // Backend
  { name: 'PHP', category: 'Backend' },
  { name: 'MySQL', category: 'Backend' },
  { name: 'RESTful APIs', category: 'Backend' },
  { name: 'Craft CMS', category: 'Backend' },
  { name: 'Twig', category: 'Backend' },
  
  // DevOps & Tools
  { name: 'AWS', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
  { name: 'CI/CD', category: 'DevOps' },
];

const categories = ['Frontend', 'Backend', 'DevOps'];
const categoryColors = {
  Frontend: 'bg-primary/20 text-primary hover:bg-primary/30',
  Backend: 'bg-accent/20 text-accent hover:bg-accent/30',
  DevOps: 'bg-secondary/20 text-secondary hover:bg-secondary/30'
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="fade-in">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Software Developer & UX Enthusiast
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a Software Developer with 3+ years of experience building scalable, 
                interactive web applications using JavaScript, React, PHP, and MySQL. 
                Skilled in both frontend and backend development, with hands-on exposure 
                to LLMs/AI integrations and API development.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Strong background in agile practices, software architecture, and maintainable design. 
                Passionate about solving real-world problems with clean, efficient code and 
                delivering products that scale.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-glass-border">
              </div>
            </Card>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Technologies & Skills
            </h3>
            
            {categories.map((category) => (
              <div key={category} className="mb-8">
                <h4 className="text-lg font-medium mb-4 text-primary">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {techStack
                    .filter(tech => tech.category === category)
                    .map((tech, index) => (
                      <Badge
                        key={index}
                        className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover-lift ${categoryColors[category as keyof typeof categoryColors]}`}
                      >
                        {tech.name}
                      </Badge>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-8 text-center gradient-text">
            When I'm Not Coding
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass-card p-6 text-center hover-lift hover-glow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏋️</span>
              </div>
              <h4 className="font-semibold text-accent mb-2 text-lg">Fitness & Gym</h4>
              <p className="text-muted-foreground">
                Regular strength training and cardio to maintain physical and mental well-being
              </p>
            </Card>

            <Card className="glass-card p-6 text-center hover-lift hover-glow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h4 className="font-semibold text-accent mb-2 text-lg">Reading</h4>
              <p className="text-muted-foreground">
                Tech blogs and personal development books for continuous learning
              </p>
            </Card>

            <Card className="glass-card p-6 text-center hover-lift hover-glow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥧</span>
              </div>
              <h4 className="font-semibold text-accent mb-2 text-lg">Baking</h4>
              <p className="text-muted-foreground">
                Creating artisanal Cakes - precision and creativity combined
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;