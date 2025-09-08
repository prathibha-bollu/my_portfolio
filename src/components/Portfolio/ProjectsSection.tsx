import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.png';
import project3 from '@/assets/project3.png';
import project4 from '@/assets/project4.png';
import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
  id: 1,
  title: 'Meal Prep Web Application',
  description: 'A web application that helps users plan and track their meals efficiently. Features include recipe management, daily meal scheduling, and real-time calorie tracking. Built with modern React and TypeScript practices.',
  image: project1,
  technologies: ['JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  demoUrl: 'https://prathibha-bollu.github.io/MealPlan/',
  githubUrl: 'https://github.com/prathibha-bollu/MealPlan'
}
,
  {
    id: 2,
    title: 'Gemini clone',
    description:'Gemini is a modern chatbot built with React and Vite, featuring a user-friendly chat interface, NLP-powered responses, and interactive features. For locations where the API is unavailable, video recordings were used to demonstrate the functionality. Designed for responsiveness and accessibility, Gemini provides an engaging chat experience across all devices.',
    image: project2,
    technologies: ['React', 'vite', 'CSS', 'APIs','NLP'],
    demoUrl: 'https://drive.google.com/file/d/12LUu7MtmMk49xCCch6vvigaX-qvLsiZA/view',
    githubUrl: 'https://github.com/prathibha-bollu/Gemini_clone_updated'
  },
   {
   id: 3,
  title: 'Education Website',
  description: 'A React-based education platform showcasing programs, campus facilities, testimonials, and contact information. The website is fully responsive, providing an optimal experience across desktops, tablets, and mobile devices. Features include program listings, about us, campus virtual tour, student testimonials, and a contact form with Web3Forms integration.',
  image: project4,
  technologies: ['React', 'JavaScript', 'Web3Forms', 'CSS', 'Responsive Design'],
    demoUrl: 'https://prathibha-bollu.github.io/Responsive_edu_website/',
    githubUrl: 'https://github.com/prathibha-bollu/Responsive_edu_website'
  },
  {
  id: 4,
  title: 'Speech to Text Converter',
    description: 'A web application that transcribes spoken words into text in real-time using the Web Speech API. It includes start/stop controls, microphone permission prompts, and live transcription. Designed with a clean, responsive interface, users can effortlessly edit, copy, or clear the transcribed text.',
  image: project3, // replace with your speech-to-text image variable
  technologies: ['React', 'JavaScript', 'Web Speech API', 'CSS'],
  demoUrl: 'https://prathibha-bollu.github.io/Speech_to_text/',
  githubUrl: 'https://github.com/prathibha-bollu/Speech_to_text'
}
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="fade-in">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating technical expertise and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass-card overflow-hidden hover-lift hover-glow group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                      className="flex-1 bg-gradient-primary border-0 hover:bg-black-200/20 hover:text-green-400 transition-colors duration-300"
                     onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="glass-card border-0 text-muted-foreground hover:bg-green-200/20 hover:text-green-400 transition-colors duration-300"
                 onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button
  size="lg"
  variant="outline"
  className="glass-card hover-lift hover-glow px-8 py-6"
  onClick={() => window.open("https://github.com/prathibha-bollu?tab=repositories", "_blank")}
>
  View All Projects
  <ExternalLink className="w-5 h-5 ml-2" />
</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;