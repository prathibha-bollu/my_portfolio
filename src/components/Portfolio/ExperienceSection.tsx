import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Award, Calendar, MapPin, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: 'UX and Front-End Developer',
    company: "Let's Solve Analytics",
    location: 'Finland',
    duration: 'January 2025 - Present',
    description: 'Designing and developing user-friendly interfaces and prototypes using Figma, focusing on user-friendly interfaces. Developing front-end web interfaces with React and Vue.js, along with HTML and CSS to implement designs.',
    technologies: ['React', 'Vue.js', 'Figma', 'HTML', 'CSS'],
    achievements: [
      'Contributed to the integration of LLM/AI to assist doctors',
      'Collaborated with the team on training, fine-tuning, and front-end implementation',
      'Developed front-end interfaces for healthcare applications'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'Vitamondo',
    location: 'Tampere, Finland',
    duration: 'December 2024 - Present',
    description: 'Managing full-stack web solutions for a large-scale site, utilizing PHP, JavaScript, and MySQL for backend development, optimization and performance optimization.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'React'],
    achievements: [
      'Integrated and troubleshoot payment gateways (PayPal, Stripe) via RESTful APIs',
      'Enhanced website functionality with third-party API integrations',
      'Implemented performance optimization for large-scale applications'
    ]
  },
  {
    title: 'Teaching Assistant',
    company: 'Tampere University',
    location: 'Tampere, Finland',
    duration: 'January 2024 - July 2024',
    description: 'Guided students in Agile, Lean, and Kanban methodologies, deepening their skills in software lifecycle management and stakeholder engagement.',
    technologies: ['Agile', 'Lean', 'Kanban', 'Software Lifecycle Management'],
    achievements: [
      'Led sessions on product management and value estimation',
      'Integrated JIRA for backlog tracking and promoting best practices',
      'Enhanced student engagement in software maintenance'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Adalia oy',
    location: 'Tampere, Finland',
    duration: 'June 2023 - September 2023',
    description: 'Built responsive websites using Craft CMS, Twig, React, and JavaScript, tailored to client and UX specifications. Enhanced site interactivity with custom JavaScript, API integrations, and plugins.',
    technologies: ['Craft CMS', 'Twig', 'React', 'JavaScript', 'API Integrations'],
    achievements: [
      'Enhanced site interactivity with custom JavaScript solutions',
      'Streamlined CI/CD deployments by managing code revisions in Git',
      'Integrated feedback loops from developers for continuous improvement'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="fade-in">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through impactful roles and meaningful contributions in tech
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card p-6 hover-lift hover-glow h-full flex flex-col">
              {/* Company Badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                  {exp.duration.split(' - ')[1] === 'Present' ? 'Current' : 'Previous'}
                </Badge>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Role & Company */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {exp.title}
                </h3>
                <h4 className="text-lg text-accent font-semibold mb-2">
                  {exp.company}
                </h4>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-accent" />
                  <h5 className="font-semibold text-foreground">Key Achievements</h5>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="font-semibold mb-3 text-foreground text-sm">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-muted/30 text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Years Experience', value: '3+', icon: '🚀' },
            { label: 'Technologies Mastered', value: '10+', icon: '⚡' },
            { label: 'Master\'s Degree', value: 'Software', icon: '🎓' },
            { label: 'Projects Delivered', value: '20+', icon: '💼' }
          ].map((stat, index) => (
            <Card key={index} className="glass-card p-6 text-center hover-lift">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;