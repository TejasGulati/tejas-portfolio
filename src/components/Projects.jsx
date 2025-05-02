// Projects.jsx
import { useState } from 'react';
import { Github, ExternalLink, Code, Award, Trophy, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(1);

  const projects = [
    {
      id: 1,
      title: "NewsSphere",
      description: "A dynamic news aggregation platform that allows users to access the latest articles, save bookmarks, and monitor their news consumption via a personalized dashboard.",
      features: [
        "Integrated Django backend with React frontend",
        "Utilized Redis and Celery for scheduled web scraping",
        "Real-time news updates without system overload",
        "JWT authentication for secure user access",
        "Personalized dashboard for tracking reading habits"
      ],
      technologies: ["Django", "React", "JWT", "Redis", "Celery", "MySQL", "Docker"],
      githubLink: "https://github.com/TejasGulati/NewsSphere",
      demoLink: "#"
    },
    {
      id: 2,
      title: "EcoPulse",
      description: "AI-powered business solutions for sustainability, with features like predictive maintenance and AI-driven resource management.",
      features: [
        "Integrated generative AI models",
        "Focus on creating eco-friendly business models",
        "Aligned with ESG (Environmental, Social, Governance) objectives",
        "Predictive analytics for resource optimization",
        "Dashboard for tracking sustainability metrics"
      ],
      technologies: ["Django", "React", "Docker", "TensorFlow", "Generative AI"],
      githubLink: "https://github.com/TejasGulati/EcoPulse",
      demoLink: "#"
    },
    {
      id: 3,
      title: "GrameenLink",
      description: "Revolutionizing rural supply chains by connecting farmers directly to markets, eliminating middlemen, and increasing farmer income by up to 45%.",
      features: [
        "Won 3rd place at Evolve-X competition at MAIT's Zenith E-Summit",
        "Featured in Unnat Bharat Abhiyan initiative",
        "Collaborative buying model for rural communities",
        "Digital platform for direct farmer-to-market connections",
        "Real-time pricing and inventory management"
      ],
      technologies: ["Django", "React", "PostgreSQL", "Payment Gateway Integration"],
      githubLink: "#",
      demoLink: "https://grameen-link.vercel.app/",
      award: true
    }
  ];

  const ProjectCard = ({ project }) => (
    <div 
      className="relative cursor-pointer"
      onClick={() => setActiveProject(project.id)}
    >
      <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-200 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
          <div className="p-5 bg-blue-50 rounded-full flex items-center justify-center">
            {project.award ? 
              <Trophy className="text-blue-600" size={28} /> : 
              <Code className="text-blue-600" size={28} />
            }
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
            <p className="text-gray-600 mt-3">{project.description}</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-blue-600">Key Features:</h4>
          <ul className="space-y-4 ml-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold mb-3 text-blue-600">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-auto">
          {project.githubLink !== "#" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all font-medium shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
              Code
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-5 py-2 rounded-lg transition-all font-medium shadow-md border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          {project.award && (
            <span className="flex items-center gap-2 bg-blue-50 text-gray-700 px-5 py-2 rounded-lg font-medium border border-blue-200">
              <Award size={18} />
              Award Winning
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
            MY WORK
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notable projects that showcase my skills in full-stack development, DevOps, and AI integration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a
            href="https://github.com/TejasGulati"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all font-medium shadow-lg"
          >
            <Github size={18} /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;